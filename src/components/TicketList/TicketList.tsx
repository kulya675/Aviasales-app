import React, { useEffect, useState } from 'react';
import { Spin, message } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../../redux/action';
import type { InitialStateType } from '../../redux/reducer';
import aviaAPI from '../../service/aviaService';

import Tab from '../Tab';
import { ticketCreator } from '../Ticket/ticketHOC';

import styles from './TicketList.module.scss';

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux;

type ResponseStatusType = {
  loading: boolean;
  error: boolean;
};

const TicketList: React.FC<PropsType> = ({ props, setTickets }: PropsType) => {
  const { tickets, transfer, kind } = props;
  const { all, none, one, two, three } = transfer;
  const [ticketsList, setTticketsList] = useState<React.ReactNode[]>([]);
  const [showCounter, setShowCounter] = useState<number>(5);
  const [responseStatus, setResponseStatus] = useState<ResponseStatusType>({
    loading: false,
    error: false,
  });

  const onError = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    message.error('Ошибка сервера 505. Не все билеты загружены.');
  };

  const ticketListResponseHandler = () => {
    setResponseStatus({ ...responseStatus, loading: true });
    aviaAPI
      .getSearchResult()
      .then((response) => {
        if (!response.stop) {
          setTickets(response.tickets);
          ticketListResponseHandler();
        }
        if (response.stop) {
          setResponseStatus({ loading: false, error: false });
        }
      })
      .catch(() => {
        onError();
        setResponseStatus({ loading: false, error: true });
      });
  };

  useEffect(() => {
    ticketListResponseHandler();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTticketsList(ticketCreator(tickets, showCounter, transfer, kind));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets.length, showCounter, kind, all, none, one, two, three]);

  const showMore = () => {
    setShowCounter(() => {
      return showCounter + 5;
    });
  };

  return (
    <section className={`${styles.content__tickets} ${styles.tickets}`}>
      <Tab />
      {responseStatus.loading && <Spin className={styles.tickets__spinner} size="large" />}
      {ticketsList[0] ? (
        <InfiniteScroll
          next={showMore}
          hasMore
          loader={<Spin className={styles.tickets__spinner} size="large" />}
          dataLength={showCounter}
        >
          {ticketsList}
        </InfiniteScroll>
      ) : (
        <div className={styles.tickets__none}>Рейсов, подходящих под заданные фильтры, не найдено</div>
      )}
    </section>
  );
};

const mapStateToProps = (state: InitialStateType) => ({
  props: {
    transfer: state.transfer,
    kind: state.kind,
    tickets: state.tickets,
  },
});

const connector = connect(mapStateToProps, actions);

export default connector(TicketList);

import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import type { TicketI } from '../../redux/reducer';
import aviaAPI from '../../service/aviaService';

import Tab from '../Tab';
import { ticketCreator } from '../Ticket/ticketHOC';

import styles from './TicketList.module.scss';

type ResponseStatusType = {
  loading: boolean;
  error: boolean;
};

const TicketList: React.FC = () => {
  const [ticketList, setTicketList] = useState<TicketI[]>([]);
  const [responseStatus, setResponseStatus] = useState<ResponseStatusType>({
    loading: false,
    error: false,
  });

  const ticketListResponseHandler = () => {
    setResponseStatus({ ...responseStatus, loading: true });
    aviaAPI
      .getSearchResult()
      .then((response) => {
        if (!response.stop) {
          const tickets = [...ticketList, ...response.tickets];
          setTicketList(tickets);
          ticketListResponseHandler();
        }
        if (response.stop) {
          setResponseStatus({ loading: false, error: false });
        }
      })
      .catch(() => setResponseStatus({ loading: false, error: true }));
  };

  useEffect(() => {
    ticketListResponseHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tickets = ticketList.length ? ticketCreator([ticketList[0]]) : null;

  return (
    <section className={`${styles.content__tickets} ${styles.tickets}`}>
      <Tab />
      {responseStatus.loading && <Spin className={styles.tickets__spinner} size="large" />}
      {tickets}
    </section>
  );
};

export default TicketList;

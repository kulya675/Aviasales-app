import React from 'react';

import Tab from '../Tab';
import Ticket from '../Ticket';

import styles from './TicketList.module.scss';

const TicketList: React.FC = () => {
  return (
    <section className={`${styles.content__tickets} ${styles.tickets}`}>
      <Tab />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </section>
  );
};

export default TicketList;

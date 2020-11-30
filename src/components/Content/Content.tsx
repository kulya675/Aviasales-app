import React from 'react';

import Filters from '../Filters';
import TicketList from '../TicketList';

import styles from './Content.module.scss';

const Content: React.FC = () => {
  return (
    <section className={styles.content}>
      <Filters />
      <TicketList />
    </section>
  );
};

export default Content;

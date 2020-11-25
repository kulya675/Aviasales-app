import React from 'react';

import Tab from '../Tab';
import Ticket from '../Ticket';

import './TicketList.scss';

const TicketList: React.FC = () => {
  return (
    <section className="content__tickets tickets">
      <Tab />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </section>
  );
};

export default TicketList;

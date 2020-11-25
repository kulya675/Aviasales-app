import React from 'react';

import Filters from '../Filters';
import TicketList from '../TicketList';

import './Content.scss';

const Content: React.FC = () => {
  return (
    <section className="content">
      <Filters />
      <TicketList />
    </section>
  );
};

export default Content;

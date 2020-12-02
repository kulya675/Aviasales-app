import React from 'react';
import Ticket from './Ticket';
import type { TicketI } from '../../redux/reducer';

// eslint-disable-next-line import/prefer-default-export
export const ticketCreator = (arr: TicketI[]): React.ReactNode[] => {
  return arr.map((ticket: TicketI) => {
    return <Ticket ticket={ticket} />;
  });
};

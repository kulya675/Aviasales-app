import React from 'react';
import Ticket from './Ticket';
import type { KindType, TicketI, TransferType } from '../../redux/reducer';
import ticketsFilter from './ticketsFilter';

// eslint-disable-next-line import/prefer-default-export
export const ticketCreator = (
  arr: TicketI[],
  showCounter: number,
  transfer: TransferType,
  kind: KindType
): React.ReactNode[] => {
  let newArr = [...arr];

  if (kind === 'cheep') {
    newArr = ticketsFilter(arr, transfer).sort((first, second) => first.price - second.price);
  } else {
    newArr = ticketsFilter(arr, transfer).sort((first, second) => {
      return (
        first.segments[0].duration +
        first.segments[1].duration -
        (second.segments[0].duration + second.segments[1].duration)
      );
    });
  }

  newArr.length = showCounter;
  return newArr.map((ticket: TicketI) => {
    const id = ticket.price + Math.random() * 10;
    return <Ticket ticket={ticket} key={id} />;
  });
};

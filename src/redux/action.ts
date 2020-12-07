import { Dispatch } from 'react';
import type { TransferType, TicketI, TransferActionType, TicketsActionType, KindType, KindActionType } from './reducer';
import { SET_KIND, SET_TICKETS, SET_TRANSFER } from './types';

export function setTickets(tickets: Array<TicketI>) {
  return (dispatch: Dispatch<TicketsActionType>): void => {
    dispatch({ type: SET_TICKETS, payload: tickets });
  };
}

export function setKind(kind: KindType): KindActionType {
  return { type: SET_KIND, payload: kind };
}

export function setTransfer({ all, none, one, two, three }: TransferType, isAllPressed: boolean): TransferActionType {
  const transfer = { all, none, one, two, three };
  if (isAllPressed) {
    transfer.none = all;
    transfer.one = all;
    transfer.two = all;
    transfer.three = all;
  } else if (none && one && two && three) {
    transfer.all = true;
  } else {
    transfer.all = false;
  }
  return { type: SET_TRANSFER, payload: transfer };
}

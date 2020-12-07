import type { TicketI, TransferType } from '../../redux/reducer';

const ticketsFilter = (arr: TicketI[], transfer: TransferType): TicketI[] => {
  const { none, one, two, three } = transfer;
  let newArr: TicketI[] = [];
  let additionalArr: TicketI[] = [];

  if (!none && !one && !two && !three) {
    return [];
  }

  if (none) {
    additionalArr = arr.filter(
      (ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0
    );
    newArr = [...newArr, ...additionalArr];
  }

  if (one) {
    additionalArr = arr.filter(
      (ticket) => ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1
    );
    newArr = [...newArr, ...additionalArr];
  }

  if (two) {
    additionalArr = arr.filter(
      (ticket) => ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2
    );
    newArr = [...newArr, ...additionalArr];
  }
  if (three) {
    additionalArr = arr.filter(
      (ticket) => ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3
    );
    newArr = [...newArr, ...additionalArr];
  }

  return newArr;
};

export default ticketsFilter;

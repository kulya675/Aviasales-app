import { SET_KIND, SET_TICKETS, SET_TRANSFER } from './types';

export type InitialStateType = {
  transfer: TransferType;
  kind: KindType;
  tickets: Array<TicketI>;
};

export type TransferType = {
  all: boolean;
  none: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
};

export type KindType = 'cheep' | 'fast';

export type ActionType = TransferActionType | TicketsActionType | KindActionType;

export type TransferActionType = {
  type: typeof SET_TRANSFER;
  payload: TransferType;
};

export type TicketsActionType = {
  type: typeof SET_TICKETS;
  payload: Array<TicketI>;
};

export type KindActionType = {
  type: typeof SET_KIND;
  payload: KindType;
};

export interface TicketSegmentsElem {
  // Код города (iata)
  origin: string;
  // Код города (iata)
  destination: string;
  // Дата и время вылета туда
  date: string;
  // Массив кодов (iata) городов с пересадками
  stops: string[];
  // Общее время перелёта в минутах
  duration: number;
}

export interface TicketI {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: TicketSegmentsElem[];
}

const initialState: InitialStateType = {
  transfer: {
    all: true,
    none: true,
    one: true,
    two: true,
    three: true,
  },
  kind: 'cheep',
  tickets: [],
};

export function reducer(state = initialState, action: ActionType): InitialStateType {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case SET_TRANSFER:
      return { ...state, transfer: action.payload };
    case SET_KIND:
      return { ...state, kind: action.payload };
    default:
      return state;
  }
}

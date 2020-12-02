import { GET_TICKETS, SET_TRANSFER } from './types';

export type InitialStateType = {
  transfer: TransferType;
};

export type TransferType = {
  all?: boolean;
  none?: boolean;
  one?: boolean;
  two?: boolean;
  three?: boolean;
};

export type ActionType = {
  type: string;
  payload: TransferType;
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
  transfer: <TransferType>{
    all: false,
    none: false,
    one: false,
    two: false,
    three: false,
  },
};

export function reducer(state = initialState, action: ActionType): InitialStateType {
  switch (action.type) {
    case SET_TRANSFER:
      return { ...state, transfer: action.payload };
    default:
      return state;
  }
}

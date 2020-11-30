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
    case 'SET_TRANSFER':
      return { ...state, transfer: action.payload };
    default:
      return state;
  }
}

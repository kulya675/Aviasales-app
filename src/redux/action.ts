import type { TransferType, ActionType } from './reducer';

// eslint-disable-next-line import/prefer-default-export
export function setTransfer({ all, none, one, two, three }: TransferType, isAllPressed: boolean): ActionType {
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
  return { type: 'SET_TRANSFER', payload: transfer };
}

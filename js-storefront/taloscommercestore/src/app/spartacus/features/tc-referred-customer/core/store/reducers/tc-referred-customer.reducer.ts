import { TcReferredCustomerActions } from '../actions';
import { ReferredCustomer } from '../../model';

export const initialState: ReferredCustomer[] = [];

export function reducer(
  state = initialState,
  action: TcReferredCustomerActions.TcReferredCustomerAction
): ReferredCustomer[] {
  switch (action.type) {
    case TcReferredCustomerActions.LOAD_REFERRED_CUSTOMERS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }

    case TcReferredCustomerActions.LOAD_REFERRED_CUSTOMERS_FAIL: {
      return initialState;
    }

    case TcReferredCustomerActions.CLEAR_REFERRED_CUSTOMERS: {
      return initialState;
    }
  }
  return state;
}

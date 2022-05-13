import { WishList } from '../../model';
import { TcCartActions } from '../actions';

export const initialState: WishList = {
  name: 'wishList',
  entries: []
};

export function reducer(
  state = initialState,
  action: TcCartActions.TcCartAction
): WishList {
  switch (action.type) {
    case TcCartActions.GET_SAVED_FOR_LATER_SUCCESS: {
      return action.wishList ? action.wishList : initialState;
    }

    case TcCartActions.GET_SAVED_FOR_LATER_FAIL: {
      return initialState;
    }
  }
  return state;
}

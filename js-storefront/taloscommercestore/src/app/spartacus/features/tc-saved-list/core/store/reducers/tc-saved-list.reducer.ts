import { TcSavedListActions } from '../actions';
import { SavedList } from '../../model';

export const initialState: SavedList[] = [];

export function reducer(state = initialState, action: TcSavedListActions.TcSavedListAction): SavedList[] {
  switch (action.type) {
    case TcSavedListActions.LOAD_SAVED_LISTS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }

    case TcSavedListActions.LOAD_SAVED_LISTS_FAIL: {
      return initialState;
    }

    case TcSavedListActions.CLEAR_SAVED_LISTS: {
      return initialState;
    }
  }
  return state;
}

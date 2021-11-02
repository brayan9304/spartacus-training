import { TcSavedListActions } from '../actions';
import { SavedList, SavedListDetail } from '../../model';


export const initialStateSavedLists: SavedList[] = [];
export const initialStateSavedListCreate: SavedList = {name: '',description:'',id:''};
export let initialStateSavedListDetail: SavedListDetail  ;

export function reducerSavedLists(state = initialStateSavedLists, action: TcSavedListActions.TcSavedListAction): SavedList[] {
  switch (action.type) {
    case TcSavedListActions.LOAD_SAVED_LISTS_SUCCESS: {
      return action.payload ? action.payload : initialStateSavedLists;
    }

    case TcSavedListActions.LOAD_SAVED_LISTS_FAIL: {
      return initialStateSavedLists;
    }

    case TcSavedListActions.CLEAR_SAVED_LISTS: {
      return initialStateSavedLists;
    }
  }
  return state;
}

export function reducerSavedListCreate(state = initialStateSavedListCreate, action: TcSavedListActions.TcSavedListAction): SavedList {
  switch (action.type) {
    case TcSavedListActions.ADD_SAVED_LIST_SUCCESS: {
      return action.payload ? action.payload : initialStateSavedListCreate;
    }

    case TcSavedListActions.ADD_SAVED_LIST_FAIL: {
      return initialStateSavedListCreate;
    }
  }
  return state;
}

export function reducerSavedListDetail(state = initialStateSavedListDetail, action: TcSavedListActions.TcSavedListAction): SavedListDetail {
  switch (action.type) {
    case TcSavedListActions.LOAD_SAVED_LIST_DETAIL_SUCCESS: {
      return action.payload ? action.payload : initialStateSavedListDetail;
    }

    case TcSavedListActions.LOAD_SAVED_LIST_DETAIL_FAIL: {
      return initialStateSavedListDetail;
    }

    case TcSavedListActions.CLEAR_SAVED_LIST_DETAIL: {
      return initialStateSavedListDetail;
    }
  }
  return state;
}

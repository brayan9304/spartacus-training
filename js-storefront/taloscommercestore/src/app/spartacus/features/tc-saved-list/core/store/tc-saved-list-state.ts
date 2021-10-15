import { TC_SAVED_LIST_CORE_FEATURE, TC_SAVED_LIST_DETAIL_CORE_FEATURE } from '../../root';
import { SavedList, SavedListDetail } from '../model';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';


export const SAVED_LISTS = '[SavedList] Saved Lists';
export const SAVED_LIST_DETAIL = '[SavedListDetail] Saved List Detail';

export interface StateWithSavedLists {
  [TC_SAVED_LIST_CORE_FEATURE]: SavedListsState;
}

export interface StateWithSavedListDetail {
  [TC_SAVED_LIST_DETAIL_CORE_FEATURE]: SavedListDetailState;
}

export interface SavedListsState {
  savedLists: LoaderState<SavedList[]>;
}

export interface SavedListDetailState {
  savedListDetail: LoaderState<SavedListDetail>;
}

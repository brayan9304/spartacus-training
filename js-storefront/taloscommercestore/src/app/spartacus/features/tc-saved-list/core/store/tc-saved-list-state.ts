import { TC_SAVED_LIST_CORE_FEATURE, TC_SAVED_LIST_DETAIL_CORE_FEATURE, TC_SAVED_LIST_CREATE_FEATURE, TC_SAVED_LIST_CREATE_CORE_FEATURE } from '../../root';
import { SavedList, SavedListDetail } from '../model';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';


export const SAVED_LISTS = '[SavedList] Saved Lists';
export const SAVED_LIST_DETAIL = '[SavedListDetail] Saved List Detail';
export const SAVED_LIST = '[SavedListCreate] Saved List Create'

export interface StateWithSavedLists {
  [TC_SAVED_LIST_CORE_FEATURE]: SavedListsState;
}

export interface StateWithSavedListDetail {
  [TC_SAVED_LIST_DETAIL_CORE_FEATURE]: SavedListDetailState;
}

export interface StateWithSavedListCreate{
  [TC_SAVED_LIST_CREATE_CORE_FEATURE]: SavedListCreateState;
}

export interface SavedListsState {
  savedLists: LoaderState<SavedList[]>;
}

export interface SavedListDetailState {
  savedListDetail: LoaderState<SavedListDetail>;
}

export interface SavedListCreateState {
  savedListCreate: LoaderState<SavedList>;
}

import { TC_SAVED_LIST_CORE_FEATURE } from '../../root';
import { SavedList } from '../model';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';


export const SAVED_LISTS = '[SavedList] Saved Lists';

export interface StateWithSavedLists {
  [TC_SAVED_LIST_CORE_FEATURE]: SavedListsState;
}

export interface SavedListsState {
  savedLists: LoaderState<SavedList[]>;
}

import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { TC_SAVED_LIST_FEATURE, TC_SAVED_LIST_DETAIL_FEATURE } from '../../../root';
import { SavedListsState, StateWithSavedLists, SavedListDetailState, StateWithSavedListDetail } from '../tc-saved-list-state';

export const getStateWithSavedLists: MemoizedSelector<StateWithSavedLists, SavedListsState> =
  createFeatureSelector<SavedListsState>(TC_SAVED_LIST_FEATURE);

export const getStateWithSavedListDetail: MemoizedSelector<StateWithSavedListDetail, SavedListDetailState> =
  createFeatureSelector<SavedListDetailState>(TC_SAVED_LIST_DETAIL_FEATURE);

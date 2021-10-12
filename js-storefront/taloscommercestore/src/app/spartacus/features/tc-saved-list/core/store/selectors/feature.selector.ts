import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { TC_SAVED_LIST_FEATURE } from '../../../root';
import { SavedListsState, StateWithSavedLists } from '../tc-saved-list-state';

export const getStateWithSavedLists: MemoizedSelector<StateWithSavedLists, SavedListsState> =
  createFeatureSelector<SavedListsState>(TC_SAVED_LIST_FEATURE);

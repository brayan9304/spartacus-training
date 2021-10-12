import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { SavedListsState, StateWithSavedLists } from '../tc-saved-list-state';
import { SavedList } from '../../model';
import { getStateWithSavedLists } from './feature.selector';

export const getSavedListsState: MemoizedSelector<StateWithSavedLists, LoaderState<SavedList[]>> = createSelector(
  getStateWithSavedLists,
  (state: SavedListsState) => state.savedLists
);

export const getSavedListsValue: MemoizedSelector<StateWithSavedLists, SavedList[]> =
  createSelector(getSavedListsState, StateUtils.loaderValueSelector);

export const getSavedListById = (
  id: string
): MemoizedSelector<StateWithSavedLists, SavedList> =>
  createSelector(getSavedListsValue, (savedLists) =>
  savedLists.find((savedList) => savedList.id === id)
  );

export const getSavedListsLoading: MemoizedSelector<StateWithSavedLists, boolean> = createSelector(
  getSavedListsState,
  StateUtils.loaderLoadingSelector
);

export const getSavedListsSuccess: MemoizedSelector<StateWithSavedLists, boolean> = createSelector(
  getSavedListsState,
  StateUtils.loaderSuccessSelector
);

export const getSavedListsError: MemoizedSelector<StateWithSavedLists, boolean> = createSelector(
  getSavedListsState,
  StateUtils.loaderErrorSelector
);

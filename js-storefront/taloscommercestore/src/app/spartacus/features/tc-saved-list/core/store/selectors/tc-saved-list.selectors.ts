import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { SavedListsState, StateWithSavedLists, SavedListDetailState, StateWithSavedListDetail } from '../tc-saved-list-state';
import { SavedList, SavedListDetail } from '../../model';
import { getStateWithSavedLists, getStateWithSavedListDetail } from './feature.selector';

export const getSavedListsState: MemoizedSelector<StateWithSavedLists, LoaderState<SavedList[]>> = createSelector(
  getStateWithSavedLists,
  (state: SavedListsState) => state.savedLists
);

export const getSavedListsValue: MemoizedSelector<StateWithSavedLists, SavedList[]> = createSelector(
  getSavedListsState,
  StateUtils.loaderValueSelector
);

export const getSavedListById = (id: string): MemoizedSelector<StateWithSavedLists, SavedList> =>
  createSelector(getSavedListsValue, (savedLists) => savedLists.find((savedList) => savedList.id === id));

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

export const getSavedListDetailState: MemoizedSelector<StateWithSavedListDetail, LoaderState<SavedListDetail>> = createSelector(
  getStateWithSavedListDetail,
  (state: SavedListDetailState) => state.savedListDetail
);

export const getSavedListDetailValue: MemoizedSelector<StateWithSavedListDetail, SavedListDetail> = createSelector(
  getSavedListDetailState,
  StateUtils.loaderValueSelector
);


export const getSavedListDetailLoading: MemoizedSelector<StateWithSavedListDetail, boolean> = createSelector(
  getSavedListDetailState,
  StateUtils.loaderLoadingSelector
);

export const getSavedListDetailSuccess: MemoizedSelector<StateWithSavedListDetail, boolean> = createSelector(
  getSavedListDetailState,
  StateUtils.loaderSuccessSelector
);

export const getSavedListDetailError: MemoizedSelector<StateWithSavedListDetail, boolean> = createSelector(
  getSavedListDetailState,
  StateUtils.loaderErrorSelector
);

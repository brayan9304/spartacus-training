import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import * as fromSavedLists from './tc-saved-list.reducer';
import { SAVED_LISTS, SavedListsState, SAVED_LIST_DETAIL, SavedListDetailState, SAVED_LIST, SavedListCreateState } from '../tc-saved-list-state';
import { SavedList, SavedListDetail } from '../../model';

export function getReducers(): ActionReducerMap<SavedListsState> {
  return {
    savedLists: StateUtils.loaderReducer<SavedList[]>(SAVED_LISTS, fromSavedLists.reducerSavedLists),

  };
}

export function getReducersCreate(): ActionReducerMap<SavedListCreateState> {
  return {
    savedListCreate: StateUtils.loaderReducer<SavedList>(SAVED_LIST, fromSavedLists.reducerSavedListCreate),

  };
}

export function getReducersDetail(): ActionReducerMap<SavedListDetailState> {
  return {
    savedListDetail: StateUtils.loaderReducer<SavedListDetail>(
      SAVED_LIST_DETAIL,
      fromSavedLists.reducerSavedListDetail
    ),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<SavedListsState>> = new InjectionToken<
  ActionReducerMap<SavedListsState>
>('SavedListReducers');


export const reducerTokenCreate: InjectionToken<ActionReducerMap<SavedListCreateState>> = new InjectionToken<
  ActionReducerMap<SavedListCreateState>
>('SavedListCreateReducers');

export const reducerTokenDetail: InjectionToken<ActionReducerMap<SavedListDetailState>> = new InjectionToken<
  ActionReducerMap<SavedListDetailState>
>('SavedListDetailReducers');


export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

export const reducerProviderCreate: Provider = {
  provide: reducerTokenCreate,
  useFactory: getReducersCreate,
};

export const reducerProviderDetail: Provider = {
  provide: reducerTokenDetail,
  useFactory: getReducersDetail
}

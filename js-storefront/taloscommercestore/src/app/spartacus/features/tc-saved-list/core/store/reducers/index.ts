import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import * as fromSavedLists from './tc-saved-list.reducer';
import { SAVED_LISTS, SavedListsState } from '../tc-saved-list-state';
import { SavedList } from '../../model';

export function getReducers(): ActionReducerMap<SavedListsState> {
  return {
    savedLists: StateUtils.loaderReducer<SavedList[]>(SAVED_LISTS, fromSavedLists.reducer),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<SavedListsState>> = new InjectionToken<
  ActionReducerMap<SavedListsState>
>('SavedListReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

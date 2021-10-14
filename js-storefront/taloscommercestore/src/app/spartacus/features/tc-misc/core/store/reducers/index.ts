import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { MiscState } from '../tc-misc-state';
import * as fromDocumentType from './tc-document-type.reducer';

export function getReducers(): ActionReducerMap<MiscState> {
  return {
    documentTypes: fromDocumentType.reducer,
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<MiscState>> = new InjectionToken<
  ActionReducerMap<MiscState>
>('MiscReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

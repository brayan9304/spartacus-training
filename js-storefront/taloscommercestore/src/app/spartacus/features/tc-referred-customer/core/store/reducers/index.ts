import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import * as fromReferredCustomers from './tc-referred-customer.reducer';
import { REFERRED_CUSTOMERS, ReferredCustomersState } from '../tc-referred-customer-state';
import { ReferredCustomer } from '../../model';

export function getReducers(): ActionReducerMap<ReferredCustomersState> {
  return {
    referredCustomers: StateUtils.loaderReducer<ReferredCustomer[]>(REFERRED_CUSTOMERS, fromReferredCustomers.reducer),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<ReferredCustomersState>> = new InjectionToken<
  ActionReducerMap<ReferredCustomersState>
>('ReferredCustomerReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

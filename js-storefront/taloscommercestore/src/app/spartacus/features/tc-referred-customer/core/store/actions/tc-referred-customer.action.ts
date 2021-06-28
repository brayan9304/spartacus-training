import { Action } from '@ngrx/store';
import { ReferredCustomer } from '../../model';
import { StateUtils } from '@spartacus/core';
import { REFERRED_CUSTOMERS } from '../tc-referred-customer-state';

export const LOAD_REFERRED_CUSTOMERS = '[ReferredCustomer] Load Referred Customers';
export const LOAD_REFERRED_CUSTOMERS_SUCCESS = '[ReferredCustomer] Load Referred Customers Success';
export const LOAD_REFERRED_CUSTOMERS_FAIL = '[ReferredCustomer] Load Referred Customers Fail';
export const CLEAR_REFERRED_CUSTOMERS = '[ReferredCustomer] Clear Referred Customers';

export class LoadReferredCustomers extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_REFERRED_CUSTOMERS;
  constructor(public payload: string) {
    super(REFERRED_CUSTOMERS);
  }
}

export class LoadReferredCustomersSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_REFERRED_CUSTOMERS_SUCCESS;
  constructor(public payload: ReferredCustomer[]) {
    super(REFERRED_CUSTOMERS);
  }
}

export class LoadReferredCustomersFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_REFERRED_CUSTOMERS_FAIL;
  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS, payload);
  }
}

export class ClearReferredCustomers implements Action {
  readonly type = CLEAR_REFERRED_CUSTOMERS;
}

export type TcReferredCustomerAction =
  | LoadReferredCustomers
  | LoadReferredCustomersSuccess
  | LoadReferredCustomersFail
  | ClearReferredCustomers;

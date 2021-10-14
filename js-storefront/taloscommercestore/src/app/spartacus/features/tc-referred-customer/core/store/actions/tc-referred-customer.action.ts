import { Action } from '@ngrx/store';
import { ReferredCustomer } from '../../model';
import { StateUtils } from '@spartacus/core';
import { REFERRED_CUSTOMERS } from '../tc-referred-customer-state';

export const LOAD_REFERRED_CUSTOMERS = '[ReferredCustomer] Load Referred Customers';
export const LOAD_REFERRED_CUSTOMERS_SUCCESS = '[ReferredCustomer] Load Referred Customers Success';
export const LOAD_REFERRED_CUSTOMERS_FAIL = '[ReferredCustomer] Load Referred Customers Fail';
export const CLEAR_REFERRED_CUSTOMERS = '[ReferredCustomer] Clear Referred Customers';
export const ADD_REFERRED_CUSTOMER = '[ReferredCustomer] Add Referred Customer';
export const ADD_REFERRED_CUSTOMER_SUCCESS = '[ReferredCustomer] Add Referred Customer Success';
export const ADD_REFERRED_CUSTOMER_FAIL = '[ReferredCustomer] Add Referred Customer Fail';
export const UPDATE_REFERRED_CUSTOMER = '[ReferredCustomer] Update Referred Customer';
export const UPDATE_REFERRED_CUSTOMER_SUCCESS = '[ReferredCustomer] Update Referred Customer Success';
export const UPDATE_REFERRED_CUSTOMER_FAIL = '[ReferredCustomer] Update Referred Customer Fail';
export const DELETE_REFERRED_CUSTOMER = '[ReferredCustomer] Delete Referred Customer';
export const DELETE_REFERRED_CUSTOMER_SUCCESS = '[ReferredCustomer] Delete Referred Customer Success';
export const DELETE_REFERRED_CUSTOMER_FAIL = '[ReferredCustomer] Delete Referred Customer Fail';

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

export class AddReferredCustomer extends StateUtils.LoaderLoadAction {
  readonly type = ADD_REFERRED_CUSTOMER;

  constructor(public payload: { userId: string; referredCustomer: ReferredCustomer }) {
    super(REFERRED_CUSTOMERS);
  }
}

export class AddReferredCustomerFail extends StateUtils.LoaderFailAction {
  readonly type = ADD_REFERRED_CUSTOMER_FAIL;

  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS, payload);
  }
}

export class AddReferredCustomerSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = ADD_REFERRED_CUSTOMER_SUCCESS;

  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS);
  }
}

export class UpdateReferredCustomer extends StateUtils.LoaderLoadAction {
  readonly type = UPDATE_REFERRED_CUSTOMER;

  constructor(public payload: { userId: string; email: string; referredCustomer: ReferredCustomer }) {
    super(REFERRED_CUSTOMERS);
  }
}

export class UpdateReferredCustomerFail extends StateUtils.LoaderFailAction {
  readonly type = UPDATE_REFERRED_CUSTOMER_FAIL;

  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS, payload);
  }
}

export class UpdateReferredCustomerSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = UPDATE_REFERRED_CUSTOMER_SUCCESS;

  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS);
  }
}

export class DeleteReferredCustomer extends StateUtils.LoaderLoadAction {
  readonly type = DELETE_REFERRED_CUSTOMER;

  constructor(public payload: { userId: string; email: string }) {
    super(REFERRED_CUSTOMERS);
  }
}

export class DeleteReferredCustomerFail extends StateUtils.LoaderFailAction {
  readonly type = DELETE_REFERRED_CUSTOMER_FAIL;

  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS, payload);
  }
}

export class DeleteReferredCustomerSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = DELETE_REFERRED_CUSTOMER_SUCCESS;

  constructor(public payload: any) {
    super(REFERRED_CUSTOMERS);
  }
}

export type TcReferredCustomerAction =
  | LoadReferredCustomers
  | LoadReferredCustomersSuccess
  | LoadReferredCustomersFail
  | ClearReferredCustomers
  | AddReferredCustomer
  | AddReferredCustomerSuccess
  | AddReferredCustomerFail
  | UpdateReferredCustomer
  | UpdateReferredCustomerSuccess
  | UpdateReferredCustomerFail
  | DeleteReferredCustomer
  | DeleteReferredCustomerSuccess
  | DeleteReferredCustomerFail;

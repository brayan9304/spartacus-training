import { TC_REFERRED_CUSTOMER_FEATURE } from '../../root';
import { ReferredCustomer } from '../model';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';

export const REFERRED_CUSTOMERS = '[ReferredCustomer] Referred Customers';

export interface StateWithReferredCustomers {
  [TC_REFERRED_CUSTOMER_FEATURE]: ReferredCustomersState;
}

export interface ReferredCustomersState {
  referredCustomers: LoaderState<ReferredCustomer[]>;
}

import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { TC_REFERRED_CUSTOMER_FEATURE } from '../../../root';
import { ReferredCustomersState, StateWithReferredCustomers } from '../tc-referred-customer-state';

export const getStateWithReferredCustomers: MemoizedSelector<StateWithReferredCustomers, ReferredCustomersState> =
  createFeatureSelector<ReferredCustomersState>(TC_REFERRED_CUSTOMER_FEATURE);

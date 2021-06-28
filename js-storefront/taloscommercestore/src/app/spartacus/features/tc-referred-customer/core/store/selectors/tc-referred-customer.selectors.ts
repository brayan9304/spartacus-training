import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { ReferredCustomersState, StateWithReferredCustomers } from '../tc-referred-customer-state';
import { ReferredCustomer } from '../../model';
import { getStateWithReferredCustomers } from './feature.selector';

export const getReferredCustomersState: MemoizedSelector<
  StateWithReferredCustomers,
  LoaderState<ReferredCustomer[]>
> = createSelector(getStateWithReferredCustomers, (state: ReferredCustomersState) => state.referredCustomers);

export const getReferredCustomers: MemoizedSelector<StateWithReferredCustomers, ReferredCustomer[]> = createSelector(
  getReferredCustomersState,
  (state: LoaderState<ReferredCustomer[]>) => StateUtils.loaderValueSelector(state)
);

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

export const getReferredCustomersValue: MemoizedSelector<StateWithReferredCustomers, ReferredCustomer[]> =
  createSelector(getReferredCustomersState, StateUtils.loaderValueSelector);

export const getReferredCustomerByEmail = (
  email: string
): MemoizedSelector<StateWithReferredCustomers, ReferredCustomer> =>
  createSelector(getReferredCustomersValue, (referredCustomers) =>
    referredCustomers.find((referredCustomer) => referredCustomer.email === email)
  );

export const getReferredCustomersLoading: MemoizedSelector<StateWithReferredCustomers, boolean> = createSelector(
  getReferredCustomersState,
  StateUtils.loaderLoadingSelector
);

export const getReferredCustomersSuccess: MemoizedSelector<StateWithReferredCustomers, boolean> = createSelector(
  getReferredCustomersState,
  StateUtils.loaderSuccessSelector
);

export const getReferredCustomersError: MemoizedSelector<StateWithReferredCustomers, boolean> = createSelector(
  getReferredCustomersState,
  StateUtils.loaderErrorSelector
);

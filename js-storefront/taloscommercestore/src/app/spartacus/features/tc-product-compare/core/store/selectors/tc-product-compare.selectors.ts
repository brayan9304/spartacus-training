import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Product, StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { ProductCompareState, StateWithProductCompare } from '../tc-product-compare-state';
import { getStateWithProductCompare } from './feature.selector';

export const getProductCompareState: MemoizedSelector<
  StateWithProductCompare,
  LoaderState<Product[]>
> = createSelector(getStateWithProductCompare, (state: ProductCompareState) => state.productCompare);

export const getProductCompareValue: MemoizedSelector<StateWithProductCompare, Product[]> =
  createSelector(getProductCompareState, StateUtils.loaderValueSelector);

export const getProductCompareLoading: MemoizedSelector<StateWithProductCompare, boolean> = createSelector(
  getProductCompareState,
  StateUtils.loaderLoadingSelector
);

export const getProductCompareSuccess: MemoizedSelector<StateWithProductCompare, boolean> = createSelector(
  getProductCompareState,
  StateUtils.loaderSuccessSelector
);

export const getProductCompareError: MemoizedSelector<StateWithProductCompare, boolean> = createSelector(
  getProductCompareState,
  StateUtils.loaderErrorSelector
);

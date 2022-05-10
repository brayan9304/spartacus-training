import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Cart, OrderEntry, StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { WishList } from '../../model';
import { CartState, StateWithCart } from '../tc-cart-state';
import { getStateWithCart } from './feature.selector';

export const getWishListState: MemoizedSelector<
  StateWithCart,
  LoaderState<WishList>
> = createSelector(getStateWithCart, (state: CartState) => state.wishList);

export const getSavedForLaterValue: MemoizedSelector<StateWithCart, WishList> = 
  createSelector(getWishListState, StateUtils.loaderValueSelector);

export const getWishListLoading: MemoizedSelector<StateWithCart, boolean> = createSelector(
  getWishListState,
  StateUtils.loaderLoadingSelector
)

export const getWishListSuccess: MemoizedSelector<StateWithCart, boolean> = createSelector(
  getWishListState,
  StateUtils.loaderSuccessSelector
)

export const getWishListError: MemoizedSelector<StateWithCart, boolean> = createSelector(
  getWishListState,
  StateUtils.loaderErrorSelector
)
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Cart, StateUtils } from '@spartacus/core';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { CartState, StateWithCart } from '../tc-cart-state';
import { getStateWithCart } from './feature.selector';

export const getCartState: MemoizedSelector<
  StateWithCart,
  LoaderState<Cart[]>
> = createSelector(getStateWithCart, (state: CartState) => state.cart);


import { TC_CART_FEATURE } from '../../root';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { Cart } from '@spartacus/core';

export const CART = '[Cart] Cart';

export interface StateWithCart {
  [TC_CART_FEATURE]: CartState;
}

export interface CartState {
  cart: LoaderState<Cart[]>;
}

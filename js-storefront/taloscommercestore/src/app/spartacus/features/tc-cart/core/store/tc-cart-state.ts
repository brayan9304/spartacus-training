import { TC_CART_FEATURE } from '../../root';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { Cart, OrderEntry } from '@spartacus/core';
import { WishList } from '../model';

export const CART = '[Cart] Cart';

export interface StateWithCart {
  [TC_CART_FEATURE]: CartState;
}

export interface CartState {
  wishList: LoaderState<WishList>;
}



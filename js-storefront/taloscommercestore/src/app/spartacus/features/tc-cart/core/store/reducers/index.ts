import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { Cart, StateUtils } from '@spartacus/core';
import * as fromCart from './tc-cart.reducer';
import { CART, CartState } from '../tc-cart-state';
import { WishList } from '../../model';

export function getReducers(): ActionReducerMap<CartState> {
  return {
    wishList: StateUtils.loaderReducer<WishList>(CART, fromCart.reducer),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<CartState>> = new InjectionToken<
  ActionReducerMap<CartState>
>('CartReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

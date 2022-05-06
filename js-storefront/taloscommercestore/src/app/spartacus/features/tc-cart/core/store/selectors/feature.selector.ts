import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { TC_CART_FEATURE } from '../../../root';
import { CartState, StateWithCart } from '../tc-cart-state';

export const getStateWithCart: MemoizedSelector<StateWithCart, CartState> =
  createFeatureSelector<CartState>(TC_CART_FEATURE);

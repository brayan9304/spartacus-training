import { InjectionToken, Provider } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { Product, StateUtils } from '@spartacus/core';
import * as fromProductCompare from './tc-product-compare.reducer';
import { PRODUCT_COMPARE, ProductCompareState } from '../tc-product-compare-state';

export function getReducers(): ActionReducerMap<ProductCompareState> {
  return {
    productCompare: StateUtils.loaderReducer<Product[]>(PRODUCT_COMPARE, fromProductCompare.reducer),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<ProductCompareState>> = new InjectionToken<
  ActionReducerMap<ProductCompareState>
>('ProductCompareReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

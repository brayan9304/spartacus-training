import { Action } from '@ngrx/store';
import { Product, StateUtils } from '@spartacus/core';
import { PRODUCT_COMPARE } from '../tc-product-compare-state';

export const LOAD_PRODUCTS = '[ProductCompare] Load Products';
export const CLEAR_PRODUCTS = '[ProductCompare] Clear Products';
export const ADD_PRODUCT = '[ProductCompare] Add Product';
export const DELETE_PRODUCT = '[ProductCompare] Delete Product';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class ClearProducts implements Action {
  readonly type = CLEAR_PRODUCTS;
}

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: { product: Product }) {}
}


export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;

  constructor(public payload: { productCode: string }) {}
}

export type TcProductCompareAction =
  | LoadProducts
  | ClearProducts
  | AddProduct
  | DeleteProduct;
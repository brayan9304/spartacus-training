import { Product } from '@spartacus/core';
import { TcProductCompareActions } from '../actions';

export const initialState: Product[] = [];

export function reducer(
  state = initialState,
  action: TcProductCompareActions.TcProductCompareAction
): Product[] {
  switch (action.type) {
    case TcProductCompareActions.LOAD_PRODUCTS: {
      return state;
    }

    case TcProductCompareActions.ADD_PRODUCT: {
      let products = [
        ...state,
        action.payload.product
      ]
      if (products.length == 5) {
        products.shift()
      }
      return products;
    }

    case TcProductCompareActions.DELETE_PRODUCT: {
      let products = state.filter((item) => item.code !== action.payload.productCode);
      return products;
    }

    case TcProductCompareActions.CLEAR_PRODUCTS: {
      return initialState;
    }

    case TcProductCompareActions.GET_PRODUCT_BY_CODE: {
      return state;
    }
  }
  return state;
}
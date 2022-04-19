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
      console.log(products);
      
      return products;
    }

    case TcProductCompareActions.DELETE_PRODUCT: {
      return state.filter((item) => item.code !== action.payload.productCode);
    }

    case TcProductCompareActions.CLEAR_PRODUCTS: {
      return initialState;
    }
  }
  return state;
}
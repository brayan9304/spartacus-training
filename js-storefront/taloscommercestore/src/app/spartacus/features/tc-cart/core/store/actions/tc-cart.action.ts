import { OrderEntry, StateUtils } from '@spartacus/core';
import { WishList } from '../../model';
import { CART } from '../tc-cart-state';

export const SAVE_FOR_LATER = '[Cart] Save For Later';
export const SAVE_FOR_LATER_SUCCESS = '[Cart] Save For Later Success';
export const SAVE_FOR_LATER_FAIL = '[Cart] Save For Later Fail';
export const SAVE_MANY_FOR_LATER = '[Cart] Save Many For Later';
export const SAVE_MANY_FOR_LATER_SUCCESS = '[Cart] Save Many For Later Success';
export const SAVE_MANY_FOR_LATER_FAIL = '[Cart] Save Many For Later Fail';
export const GET_SAVED_FOR_LATER = '[Cart] Get Saved For Later';
export const GET_SAVED_FOR_LATER_SUCCESS = '[Cart] Get Saved For Later Success';
export const GET_SAVED_FOR_LATER_FAIL = '[Cart] Get Saved For Later Fail';
export const REMOVE_FROM_WISHLIST = '[Cart] Remove From WishList';
export const REMOVE_FROM_WISHLIST_SUCCESS = '[Cart] Remove From WishList Success';
export const REMOVE_FROM_WISHLIST_FAIL = '[Cart] Remove From WishList Fail';
export const MOVE_TO_CART = '[Cart] Move To Cart';
export const MOVE_TO_CART_SUCCESS = '[Cart] Move To Cart Success';
export const MOVE_TO_CART_FAIL = '[Cart] Move To Cart Fail';

export class SaveForLater extends StateUtils.LoaderLoadAction {
  readonly type = SAVE_FOR_LATER;

  constructor(public payload: { userId: string, entryNumber: number}) {
    super(CART);
  }
}

export class SaveForLaterSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = SAVE_FOR_LATER_SUCCESS;

  constructor(public payload: { userId: string }) {
    super(CART);
  }
}

export class SaveForLaterFail extends StateUtils.LoaderFailAction {
  readonly type = SAVE_FOR_LATER_FAIL;

  constructor(public payload: any) {
    super(CART, payload);
  }
}

export class SaveManyForLater extends StateUtils.LoaderLoadAction {
  readonly type = SAVE_MANY_FOR_LATER;

  constructor(public payload: { userId: string, products: string}) {
    super(CART);
  }
}

export class SaveManyForLaterSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = SAVE_MANY_FOR_LATER_SUCCESS;

  constructor(public payload: { userId: string }) {
    super(CART);
  }
}

export class SaveManyForLaterFail extends StateUtils.LoaderFailAction {
  readonly type = SAVE_MANY_FOR_LATER_FAIL;

  constructor(public payload: any) {
    super(CART, payload);
  }
}

export class GetSavedForLater extends StateUtils.LoaderLoadAction {
  readonly type = GET_SAVED_FOR_LATER;

  constructor(public payload: { userId: string }) {
    super(CART);
  }
}

export class GetSavedForLaterSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = GET_SAVED_FOR_LATER_SUCCESS;

  constructor(public wishList: WishList) {
    super(CART);
  }
}

export class GetSavedForLaterFail extends StateUtils.LoaderFailAction {
  readonly type = GET_SAVED_FOR_LATER_FAIL;

  constructor(public payload: any) {
    super(CART, payload);
  }
}

export class RemoveFromWishList extends StateUtils.LoaderLoadAction {
  readonly type = REMOVE_FROM_WISHLIST;

  constructor(public payload: { userId: string, productCode: string}) {
    super(CART);
  }
}

export class RemoveFromWishListSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = REMOVE_FROM_WISHLIST_SUCCESS;

  constructor(public payload: { userId: string }) {
    super(CART);
  }
}

export class RemoveFromWishListFail extends StateUtils.LoaderFailAction {
  readonly type = REMOVE_FROM_WISHLIST_FAIL;

  constructor(public payload: any) {
    super(CART, payload);
  }
}

export class MoveToCart extends StateUtils.LoaderLoadAction {
  readonly type = MOVE_TO_CART;

  constructor(public payload: { userId: string, productCode: string}) {
    super(CART);
  }
}

export class MoveToCartSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = MOVE_TO_CART_SUCCESS;

  constructor(public payload: { userId: string }) {
    super(CART);
  }
}

export class MoveToCartFail extends StateUtils.LoaderFailAction {
  readonly type = MOVE_TO_CART_FAIL;

  constructor(public payload: any) {
    super(CART, payload);
  }
}

export type TcCartAction =
  | SaveForLater
  | SaveForLaterSuccess
  | SaveForLaterFail
  | SaveManyForLater
  | SaveManyForLaterSuccess
  | SaveManyForLaterFail
  | GetSavedForLater
  | GetSavedForLaterSuccess
  | GetSavedForLaterFail
  | RemoveFromWishList
  | RemoveFromWishListSuccess
  | RemoveFromWishListFail
  | MoveToCart
  | MoveToCartSuccess
  | MoveToCartFail;

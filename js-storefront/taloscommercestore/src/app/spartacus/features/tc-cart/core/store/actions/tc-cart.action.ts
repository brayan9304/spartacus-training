import { OrderEntry, StateUtils } from '@spartacus/core';
import { WishList } from '../../model';
import { CART } from '../tc-cart-state';

export const SAVE_MANY_FOR_LATER = '[Cart] Save Many For Later';
export const SAVE_MANY_FOR_LATER_SUCCESS = '[Cart] Save Many For Later Success';
export const SAVE_MANY_FOR_LATER_FAIL = '[Cart] Save Many For Later Fail';
export const GET_SAVED_FOR_LATER = '[Cart] Get Saved For Later';
export const GET_SAVED_FOR_LATER_SUCCESS = '[Cart] Get Saved For Later Success';
export const GET_SAVED_FOR_LATER_FAIL = '[Cart] Get Saved For Later Fail';

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

export type TcCartAction =
  | SaveManyForLater
  | SaveManyForLaterSuccess
  | SaveManyForLaterFail
  | GetSavedForLater
  | GetSavedForLaterSuccess
  | GetSavedForLaterFail;

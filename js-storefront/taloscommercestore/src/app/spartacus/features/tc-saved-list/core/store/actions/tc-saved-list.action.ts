import { Action } from '@ngrx/store';
import { SavedList, SavedListDetail } from '../../model';
import { StateUtils } from '@spartacus/core';
import { SAVED_LISTS, SAVED_LIST_DETAIL } from '../tc-saved-list-state';


export const LOAD_SAVED_LISTS = '[SavedList] Load Saved Lists';
export const LOAD_SAVED_LISTS_SUCCESS = '[SavedList] Load Saved Lists Success';
export const LOAD_SAVED_LISTS_FAIL = '[SavedList] Load Saved Lists Fail';
export const CLEAR_SAVED_LISTS = '[SavedList] Clear Saved Lists';
export const ADD_SAVED_LIST = '[SavedList] Add Saved List';
export const ADD_SAVED_LIST_SUCCESS = '[SavedList] Add Saved List Success';
export const ADD_SAVED_LIST_FAIL = '[SavedList] Add Saved List Fail';
export const DELETE_SAVED_LIST = '[SavedList] Delete Saved List';
export const DELETE_SAVED_LIST_SUCCESS = '[SavedList] Delete Saved List Success';
export const DELETE_SAVED_LIST_FAIL = '[SavedList] Delete Saved List Fail';
export const LOAD_SAVED_LIST_DETAIL = '[SavedListDetail] Load Saved List Detail';
export const LOAD_SAVED_LIST_DETAIL_SUCCESS = '[SavedListDetail] Load Saved List Detail Success';
export const LOAD_SAVED_LIST_DETAIL_FAIL = '[SavedListDetail] Load Saved List Detail Fail';
export const CLEAR_SAVED_LIST_DETAIL = '[SavedListDetail] Clear Saved List Detail';
export const ADD_PRODUCT = '[SavedListDetail] Add Product to Saved List ';
export const ADD_PRODUCT_SUCCESS = '[SavedListDetail] Add Product to Saved List  Success';
export const ADD_PRODUCT_FAIL = '[SavedListDetail] Add Product to Saved List  Fail';
export const DELETE_PRODUCT = '[SavedListDetail] Delete Product to Saved List Detail';
export const DELETE_PRODUCT_SUCCESS = '[SavedListDetail] Delete Product to Saved List Detail Success';
export const DELETE_PRODUCT_FAIL = '[SavedListDetail] Delete Product to Saved List Detail Fail';

export class LoadSavedLists extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_SAVED_LISTS;

  constructor(public payload: string) {
    super(SAVED_LISTS);
  }
}

export class LoadSavedListsSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_SAVED_LISTS_SUCCESS;

  constructor(public payload: SavedList[]) {
    super(SAVED_LISTS);
  }
}

export class LoadSavedListsFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_SAVED_LISTS_FAIL;

  constructor(public payload: any) {
    super(SAVED_LISTS, payload);
  }
}

export class ClearSavedLists implements Action {
  readonly type = CLEAR_SAVED_LISTS;
}

export class CreateSavedList extends StateUtils.LoaderLoadAction {
  readonly type = ADD_SAVED_LIST;

  constructor(public payload: { userId: string; savedList: SavedList }) {
    super(SAVED_LISTS);
  }
}

export class CreateSavedListFail extends StateUtils.LoaderFailAction {
  readonly type = ADD_SAVED_LIST_FAIL;

  constructor(public payload: any) {
    super(SAVED_LISTS, payload);
  }
}

export class CreateSavedListSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = ADD_SAVED_LIST_SUCCESS;

  constructor(public payload: any) {
    super(SAVED_LISTS);
  }
}


export class DeleteSavedList extends StateUtils.LoaderLoadAction {
  readonly type = DELETE_SAVED_LIST;

  constructor(public payload: { userId: string; listId: string }) {
    super(SAVED_LISTS);
  }
}

export class DeleteSavedListFail extends StateUtils.LoaderFailAction {
  readonly type = DELETE_SAVED_LIST_FAIL;

  constructor(public payload: any) {
    super(SAVED_LISTS, payload);
  }
}

export class DeleteSavedListSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = DELETE_SAVED_LIST_SUCCESS;

  constructor(public payload: any) {
    super(SAVED_LISTS);
  }
}

export class LoadSavedListDetail extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_SAVED_LIST_DETAIL;

  constructor(public payload: { userId: string, listId:string}) {
    super(SAVED_LIST_DETAIL);
  }
}

export class LoadSavedListDetailSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_SAVED_LIST_DETAIL_SUCCESS;

  constructor(public payload: SavedListDetail) {
    super(SAVED_LIST_DETAIL);
  }
}

export class LoadSavedListDetailFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_SAVED_LIST_DETAIL_FAIL;

  constructor(public payload: any) {
    super(SAVED_LIST_DETAIL, payload);
  }
}

export class ClearSavedListDetail implements Action {
  readonly type = CLEAR_SAVED_LIST_DETAIL;
}

export class AddProduct extends StateUtils.LoaderLoadAction {
  readonly type = ADD_PRODUCT;

  constructor(public payload: { userId: string, listName: string, productCode: string }) {
    super(SAVED_LIST_DETAIL);
  }
}

export class AddProductFail extends StateUtils.LoaderFailAction {
  readonly type = ADD_PRODUCT_FAIL;

  constructor(public payload: any) {
    super(SAVED_LIST_DETAIL, payload);
  }
}

export class AddProductSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = ADD_PRODUCT_SUCCESS;

  constructor(public payload: any) {
    super(SAVED_LIST_DETAIL);
  }
}


export class DeleteProduct extends StateUtils.LoaderLoadAction {
  readonly type = DELETE_PRODUCT;

  constructor(public payload: { userId: string, listId: string, productCode: string }) {
    super(SAVED_LIST_DETAIL);
  }
}

export class DeleteProductFail extends StateUtils.LoaderFailAction {
  readonly type = DELETE_PRODUCT_FAIL;

  constructor(public payload: any) {
    super(SAVED_LIST_DETAIL, payload);
  }
}

export class DeleteProductSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = DELETE_PRODUCT_SUCCESS;

  constructor(public payload: any) {
    super(SAVED_LIST_DETAIL);
  }
}






export type TcSavedListAction =
  | LoadSavedLists
  | LoadSavedListsFail
  | LoadSavedListsSuccess
  | ClearSavedLists
  | CreateSavedList
  | CreateSavedListSuccess
  | CreateSavedListFail
  | DeleteSavedList
  | DeleteSavedListSuccess
  | DeleteSavedListFail
  | LoadSavedListDetail
  | LoadSavedListDetailFail
  | LoadSavedListDetailSuccess
  | ClearSavedListDetail
  | AddProduct
  | AddProductFail
  | AddProductSuccess
  | DeleteProduct
  | DeleteProductFail
  | DeleteProductSuccess

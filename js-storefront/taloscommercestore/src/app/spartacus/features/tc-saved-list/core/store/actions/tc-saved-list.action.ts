import { Action } from '@ngrx/store';
import { SavedList } from '../../model';
import { StateUtils } from '@spartacus/core';
import { SAVED_LISTS } from '../tc-saved-list-state';


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

export class LoadSavedLits extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_SAVED_LISTS;

  constructor(public payload: string) {
    super(SAVED_LISTS);
  }
}

export class LoadSavedLitsSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_SAVED_LISTS_SUCCESS;

  constructor(public payload: SavedList[]) {
    super(SAVED_LISTS);
  }
}

export class LoadSavedLitsFail extends StateUtils.LoaderFailAction {
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

export type TcSavedListAction =
  | LoadSavedLits
  | LoadSavedLitsFail
  | LoadSavedLitsSuccess
  | ClearSavedLists
  | CreateSavedList
  | CreateSavedListSuccess
  | CreateSavedListFail
  | DeleteSavedList
  | DeleteSavedListSuccess
  | DeleteSavedListFail;

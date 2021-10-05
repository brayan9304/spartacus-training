import { Action } from '@ngrx/store';
import { DocumentIdentityType } from '../../model';

export const LOAD_DOCUMENT_TYPES = '[DocumentType] Load DocumentTypes';
export const LOAD_DOCUMENT_TYPES_SUCCESS = '[DocumentType] Load DocumentTypes Success';
export const LOAD_DOCUMENT_TYPES_FAILURE = '[DocumentType] Load DocumentTypes Failure';

export class LoadDocumentTypes implements Action {
  readonly type = LOAD_DOCUMENT_TYPES;

  constructor() {}
}

export class LoadDocumentTypesSuccess implements Action {
  readonly type = LOAD_DOCUMENT_TYPES_SUCCESS;

  constructor(public payload: DocumentIdentityType[]) {}
}

export class LoadDocumentTypesFailure implements Action {
  readonly type = LOAD_DOCUMENT_TYPES_FAILURE;

  constructor(public payload: any) {}
}

export type DocumentTypeActions = LoadDocumentTypes | LoadDocumentTypesSuccess | LoadDocumentTypesFailure;

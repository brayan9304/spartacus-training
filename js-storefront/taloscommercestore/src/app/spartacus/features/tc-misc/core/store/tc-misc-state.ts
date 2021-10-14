import '@spartacus/core';
import { DocumentIdentityType } from '../model';
import { TC_MISC_FEATURE } from '../../root';

export interface StateWithMisc {
  [TC_MISC_FEATURE]: MiscState;
}

export interface MiscState {
  documentTypes: DocumentTypeState;
}

// Document Type
export interface DocumentTypeState {
  entities: DocumentTypeEntities;
}

export interface DocumentTypeEntities {
  [key: string]: DocumentIdentityType;
}

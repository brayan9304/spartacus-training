import { createSelector, MemoizedSelector } from '@ngrx/store';
import { getMiscState } from './feature.selector';
import { DocumentTypeEntities, DocumentTypeState, MiscState, StateWithMisc } from '../tc-misc-state';
import { DocumentIdentityType } from '../../model';

export const getDocumentTypeState: MemoizedSelector<StateWithMisc, DocumentTypeState> = createSelector(
  getMiscState,
  (state: MiscState) => state.documentTypes
);

export const getDocumentTypeEntities: MemoizedSelector<StateWithMisc, DocumentTypeEntities> = createSelector(
  getDocumentTypeState,
  (state: DocumentTypeState) => state.entities
);

export const getAllDocumentTypes: MemoizedSelector<
  StateWithMisc,
  DocumentIdentityType[]
> = createSelector(getDocumentTypeEntities, (entities) => Object.keys(entities).map((code) => entities[code]));

export const documentTypeSelectorFactory = (code: string): MemoizedSelector<StateWithMisc, DocumentIdentityType> =>
  createSelector(getDocumentTypeEntities, (entities) => (Object.keys(entities).length !== 0 ? entities[code] : null));

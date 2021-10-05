import * as fromReducer from './tc-document-type.reducer';
import { initialState, reducer } from './tc-document-type.reducer';
import { DocumentIdentityType } from '../../model';
import { TcMiscActions } from '../actions';

describe('DocumentType Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

describe('Document Type Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as TcMiscActions.DocumentTypeActions;
      const state = fromReducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_DOCUMENT_TYPE_SUCCESS action', () => {
    it('should populate the Document Types state entities', () => {
      const mockDocumentType: DocumentIdentityType[] = [
        {
          code: 'C',
          name: 'Cédula',
        },
        {
          code: 'N',
          name: 'Nit',
        },
      ];

      const mockTitlesList = {
        mr: mockDocumentType[0],
        mrs: mockDocumentType[1],
      };

      const action = new TcMiscActions.LoadDocumentTypesSuccess(mockDocumentType);
      const state = fromReducer.reducer(initialState, action);
      expect(state.entities).toEqual(mockTitlesList);
    });
  });

  describe('CLEAR_MISCS_DATA action', () => {
    it('should clear the mics data', () => {
      const action = new TcMiscActions.ClearMiscData();
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });
});

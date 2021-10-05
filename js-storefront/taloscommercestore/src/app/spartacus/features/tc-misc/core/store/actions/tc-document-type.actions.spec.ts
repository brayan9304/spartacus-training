import { TcMiscActions } from './index';

describe('Document Types Actions', () => {
  describe('Load Document Types', () => {
    it('should create an instance', () => {
      const action = new TcMiscActions.LoadDocumentTypes();
      expect({ ...action }).toEqual({
        type: TcMiscActions.LOAD_DOCUMENT_TYPES,
      });
    });
  });

  describe('LoadDocumentTypesFail', () => {
    it('should create the action', () => {
      const error = 'anError';
      const action = new TcMiscActions.LoadDocumentTypesFailure(error);

      expect({ ...action }).toEqual({
        type: TcMiscActions.LOAD_DOCUMENT_TYPES_FAILURE,
        payload: error,
      });
    });
  });

  describe('LoadDocumentTypesSuccess', () => {
    it('should create the action', () => {
      const titles = [
        {
          code: 'N',
          name: 'Nit',
        },
        {
          code: 'C',
          name: 'Cédula',
        },
      ];
      const action = new TcMiscActions.LoadDocumentTypesSuccess(titles);
      expect({ ...action }).toEqual({
        type: TcMiscActions.LOAD_DOCUMENT_TYPES_SUCCESS,
        payload: titles,
      });
    });
  });
});

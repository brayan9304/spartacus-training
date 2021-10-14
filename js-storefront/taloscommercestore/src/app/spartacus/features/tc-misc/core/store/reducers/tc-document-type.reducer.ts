import { DocumentTypeState } from '../tc-misc-state';
import { DocumentIdentityType } from '../../model';
import { TcMiscActions } from '../actions';

export const documentTypeFeatureKey = 'documentType';

export const initialState: DocumentTypeState = {
  entities: {},
};

export function reducer(
  state = initialState,
  action: TcMiscActions.DocumentTypeActions | TcMiscActions.ClearMiscData
): DocumentTypeState {
  switch (action.type) {
    case TcMiscActions.LOAD_DOCUMENT_TYPES_SUCCESS:
      const entities = action.payload.reduce(
        (documentTypesEntities: { [code: string]: DocumentIdentityType }, type: DocumentIdentityType) => {
          return {
            ...documentTypesEntities,
            [type.code]: type,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        entities,
      };
    case TcMiscActions.LOAD_DOCUMENT_TYPES_FAILURE:
    case TcMiscActions.CLEAR_MISC_DATA:
      return initialState;
  }

  return state;
}

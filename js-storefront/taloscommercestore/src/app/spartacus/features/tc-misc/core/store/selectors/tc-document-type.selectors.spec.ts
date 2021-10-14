import { TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { StateWithMisc } from '../tc-misc-state';
import { DocumentIdentityType } from '../../model';
import { TcMiscSelectors } from './index';
import * as fromReducers from '../reducers/index';
import { TC_MISC_FEATURE } from '../../../root';
import { TcMiscActions } from '../actions';

describe('Document Types Selectors', () => {
  let store: Store<StateWithMisc>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), StoreModule.forFeature(TC_MISC_FEATURE, fromReducers.getReducers())],
    });

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getAllDocumentTypes', () => {
    it('should return all document types', () => {
      const mockDocumentTypes: DocumentIdentityType[] = [
        {
          code: 'C',
          name: 'Cédula',
        },
        {
          code: 'N',
          name: 'Nit.',
        },
      ];

      let result: DocumentIdentityType[];
      store.pipe(select(TcMiscSelectors.getAllDocumentTypes)).subscribe((value) => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new TcMiscActions.LoadDocumentTypesSuccess(mockDocumentTypes));

      expect(result).toEqual(mockDocumentTypes);
    });
  });

  describe('documentTypesSelectorFactory', () => {
    it('should return document type', () => {
      const code = 'mr';
      const mockTitles: DocumentIdentityType[] = [
        {
          code: 'C',
          name: 'Cédula',
        },
        {
          code: 'N',
          name: 'Nit.',
        },
      ];

      let result: DocumentIdentityType;

      store.pipe(select(TcMiscSelectors.documentTypeSelectorFactory(code))).subscribe((value) => (result = value));

      store.dispatch(new TcMiscActions.LoadDocumentTypesSuccess(mockTitles));
      expect(result).toEqual(mockTitles[0]);
    });
  });
});

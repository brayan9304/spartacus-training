import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { DocumentIdentityType } from '../../model';
import { DocumentTypeEffects } from './tc-document-type.effects';
import { TcMiscAdapter, TcMiscConnector } from '../../connectors';
import { TcMiscActions } from '../actions';

const mockDocumentTypes: DocumentIdentityType[] = [
  {
    code: 'C',
    name: 'Cédula',
  },
  {
    code: 'N',
    name: 'Nit',
  },
  {
    code: 'CE',
    name: 'Cédula de Entranjeria',
  },
];

describe('Document Type effect', () => {
  let service: TcMiscConnector;
  let effect: DocumentTypeEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentTypeEffects, { provide: TcMiscAdapter, useValue: {} }, provideMockActions(() => actions$)],
    });

    effect = TestBed.inject(DocumentTypeEffects);
    service = TestBed.inject(TcMiscConnector);

    spyOn(service, 'getDocumentTypes').and.returnValue(of(mockDocumentTypes));
  });

  describe('loadTitles$', () => {
    it('should load the titles', () => {
      const action = new TcMiscActions.LoadDocumentTypes();
      const completion = new TcMiscActions.LoadDocumentTypesSuccess(mockDocumentTypes);

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effect.loadDocumentTypes$).toBeObservable(expected);
    });
  });
});

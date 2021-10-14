import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { normalizeHttpError } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TcMiscActions } from '../actions';
import { TcMiscConnector } from '../../connectors';

@Injectable()
export class DocumentTypeEffects {
  @Effect()
  loadDocumentTypes$: Observable<TcMiscActions.DocumentTypeActions> = this.actions$.pipe(
    ofType(TcMiscActions.LOAD_DOCUMENT_TYPES),
    switchMap(() => {
      return this.tcMiscConnector.getDocumentTypes().pipe(
        map((documentTypes) => {
          return new TcMiscActions.LoadDocumentTypesSuccess(documentTypes);
        }),
        catchError((error) => of(new TcMiscActions.LoadDocumentTypesFailure(normalizeHttpError(error))))
      );
    })
  );

  constructor(private actions$: Actions, private tcMiscConnector: TcMiscConnector) {}
}

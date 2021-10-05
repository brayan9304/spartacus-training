import { Injectable } from '@angular/core';
import { StateWithMisc, TcMiscActions, TcMiscSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { DocumentIdentityType } from '../model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TcMiscFacade } from '../../root';

@Injectable()
export class TcMiscService implements TcMiscFacade {
  constructor(private store: Store<StateWithMisc>) {}

  /**
   * Returns document types.
   */
  getDocumentTypes(): Observable<DocumentIdentityType[]> {
    return this.store.pipe(
      select(TcMiscSelectors.getAllDocumentTypes),
      tap((documentTypes: DocumentIdentityType[]) => {
        if (Object.keys(documentTypes).length === 0) {
          this.loadDocumentTypes();
        }
      })
    );
  }

  getDocumentTypesMap(documentTypes: DocumentIdentityType[]): Map<string, DocumentIdentityType> {
    return new Map(documentTypes.map((docType) => [docType.code, docType] as [string, DocumentIdentityType]));
  }

  /**
   * Retrieves document types.
   */
  loadDocumentTypes(): void {
    this.store.dispatch(new TcMiscActions.LoadDocumentTypes());
  }
}

import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { TC_MISC_CORE_FEATURE } from '../feature-name';
import { DocumentIdentityType } from '../../core';

export function tcMiscFacadeFactory(): any {
  return facadeFactory({
    facade: TcMiscFacade,
    feature: TC_MISC_CORE_FEATURE,
    methods: ['getDocumentTypes', 'loadDocumentTypes'],
    async: true,
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: tcMiscFacadeFactory,
})
export abstract class TcMiscFacade {
  /**
   * Retrieves the available document types
   * @returns observable with array of DocumentIdentityType
   */
  abstract getDocumentTypes(): Observable<DocumentIdentityType[]>;

  /**
   * converts the given array into a map
   * @returns map of document types where the key is the document type code
   */
  abstract getDocumentTypesMap(documentTypes: DocumentIdentityType[]): Map<string, DocumentIdentityType>;

  /**
   * Loads document types
   */
  abstract loadDocumentTypes(): void;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { DOCUMENT_TYPE_NORMALIZER, DocumentIdentityType, TcMiscAdapter } from '../../core';
import { OccDocumentTypesList } from '../model/occ-tc-misc.model';

@Injectable()
export class OccTcMiscAdapter implements TcMiscAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  loadDocumentTypes(): Observable<DocumentIdentityType[]> {
    const url = this.occEndpoints.getUrl('documentTypes');
    return this.http.get<OccDocumentTypesList>(url).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      map((documentTypeList) => documentTypeList.documentTypes ?? []),
      this.converter.pipeableMany(DOCUMENT_TYPE_NORMALIZER)
    );
  }
}

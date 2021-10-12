import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { OccSavedLists } from '../model';
import { SAVED_LIST_NORMALIZER, SAVED_LIST_SERIALIZER, SavedList, TcSavedListAdapter } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OccTcSavedListAdapter implements TcSavedListAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  getSavedLists(userId: string): Observable<SavedList[]> {
    const url = this.getEndpoint('savedLists', userId);

    return this.http.get<OccSavedLists>(url).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      map((savedListLists) => savedListLists?.customProductLists ?? []),
      this.converter.pipeableMany(SAVED_LIST_NORMALIZER)
    );
  }

  private getEndpoint(endpoint: string, userId: string): string {
    return this.occEndpoints.getUrl(endpoint, { userId });
  }

  createSavedList(userId: string, savedList: SavedList): Observable<{}> {
    const url = this.occEndpoints.buildUrl('createList', {
      urlParams: { userId },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    savedList = this.converter.convert(savedList, SAVED_LIST_SERIALIZER);

    return this.http.post(url, savedList, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  deleteSavedList(userId: string, listId: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('savedListRemove', {
      urlParams: { userId, listId },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }
}

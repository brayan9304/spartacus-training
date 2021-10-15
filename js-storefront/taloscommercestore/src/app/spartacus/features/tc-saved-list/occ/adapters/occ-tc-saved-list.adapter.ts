import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { OccSavedLists, OccSavedListDetail } from '../model';
import { SAVED_LIST_NORMALIZER, SAVED_LIST_SERIALIZER, SAVED_LIST_DETAIL_NORMALIZER, SavedList, TcSavedListAdapter, SavedListDetail } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OccTcSavedListAdapter implements TcSavedListAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  getSavedLists(userId: string): Observable<SavedList[]> {
    const url = this.getEndpoint('getSavedLists', userId);

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
    const url = this.occEndpoints.buildUrl('createSavedList', {
      urlParams: { userId },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    savedList = this.converter.convert(savedList, SAVED_LIST_SERIALIZER);

    return this.http.post(url, savedList, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  deleteSavedList(userId: string, listId: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('deleteSavedList', {
      urlParams: { userId, listId },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  getSavedListDetail(userId: string, listId: string): Observable<SavedListDetail> {
    const url = this.getEndpointForDetails('getDetailsFromSavedList', userId, listId);

    return this.http.get<OccSavedListDetail>(url).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      this.converter.pipeable(SAVED_LIST_DETAIL_NORMALIZER)
    );
  }

  private getEndpointForDetails(endpoint: string, userId: string, listId: string): string {
    return this.occEndpoints.getUrl(endpoint, { userId, listId });
  }

  addProduct(userId: string, listName: string, productCode: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('addProductToSavedList', {
      urlParams: { userId, listName, productCode },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    //TODO:
    return this.http.post(url, {}, { headers }).pipe(catchError((error: any) => throwError(error)))
  }

  deleteProduct(userId: string, listId: string, productCode: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('deleteProductFromSavedList', {
      urlParams: { userId, listId, productCode },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

}

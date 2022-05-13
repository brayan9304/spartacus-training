import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, ConverterService, InterceptorUtil, normalizeHttpError, Occ, OccEndpointsService, OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OrderEntry, USE_CLIENT_TOKEN } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { CART_NORMALIZER, TcCartAdapter } from '../../core';
import { catchError, map, pluck } from 'rxjs/operators';

@Injectable()
export class OccTcCartAdapter implements TcCartAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  public saveForLater(userId:string, entryNumber: number): Observable<{}> {
    const url = this.occEndpoints.buildUrl('saveForLater', {
      urlParams: { userId, cartId:'current', entryNumber },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  public saveManyForLater(userId: string, productCodes: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('saveManyForLater', {
      urlParams: { userId, cartId:'current', productCodes },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  public getSavedForLater(userId: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('getSavedForLater', {
      urlParams: { userId, cartId:'current'},
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  public removeFromWishList(userId: string, productCode: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('removeFromWishList', {
      urlParams: { userId, productCode, cartId:'current' }
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    return this.http.delete(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  public moveToCart(userId: string, productCode: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('moveToCart', {
      urlParams: { userId, productCode, cartId:'current' }
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    return this.http.post(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }
}
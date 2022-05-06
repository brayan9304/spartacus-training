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

  public saveManyForLater(userId: string, products: OrderEntry[]): Observable<{}> {
    // TODO: Change Endpoint
    const url = this.occEndpoints.buildUrl('Endpoint', {
      urlParams: { userId },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, products, { headers }).pipe(catchError((error: any) => throwError(error)));
  }
}
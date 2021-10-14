import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { OccReferredCustomerList } from '../model';
import { REFERRED_CUSTOMER_NORMALIZER, REFERRED_CUSTOMER_SERIALIZER, ReferredCustomer, TcReferredCustomerAdapter } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OccTcReferredCustomerAdapter implements TcReferredCustomerAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService,
  ) {
  }

  getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    const url = this.getEndpoint('referredCustomers', userId);

    return this.http.get<OccReferredCustomerList>(url).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      map((referredCustomerList) => referredCustomerList?.referredCustomers ?? []),
      this.converter.pipeableMany(REFERRED_CUSTOMER_NORMALIZER),
    );
  }

  private getEndpoint(endpoint: string, userId: string): string {
    return this.occEndpoints.getUrl(endpoint, { userId });
  }

  addReferredCustomer(userId: string, referredCustomer: ReferredCustomer): Observable<{}> {
    const url = this.occEndpoints.buildUrl('referredCustomers', {
      urlParams: { userId },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    referredCustomer = this.converter.convert(referredCustomer, REFERRED_CUSTOMER_SERIALIZER);

    return this.http.post(url, referredCustomer, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  updateReferredCustomer(userId: string, email: string, referredCustomer: ReferredCustomer): Observable<{}> {
    const url = this.occEndpoints.buildUrl('referredCustomerDetail', {
      urlParams: { userId, email },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    referredCustomer = this.converter.convert(referredCustomer, REFERRED_CUSTOMER_SERIALIZER);

    return this.http.patch(url, referredCustomer, { headers }).pipe(catchError((error: any) => throwError(error)));
  }

  deleteReferredCustomer(userId: string, email: string): Observable<{}> {
    const url = this.occEndpoints.buildUrl('referredCustomerDetail', {
      urlParams: { userId, email },
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(url, { headers }).pipe(catchError((error: any) => throwError(error)));
  }
}

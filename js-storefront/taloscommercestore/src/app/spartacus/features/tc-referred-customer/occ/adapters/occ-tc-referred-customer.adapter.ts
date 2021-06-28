import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { OccReferredCustomerList } from '../model';
import { REFERRED_CUSTOMER_NORMALIZER, ReferredCustomer, TcReferredCustomerAdapter } from '../../core';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OccTcReferredCustomerAdapter implements TcReferredCustomerAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    const url = this.getEndpoint('referredCustomers', userId);

    return this.http.get<OccReferredCustomerList>(url).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      map((referredCustomerList) => referredCustomerList?.referredCustomers ?? []),
      this.converter.pipeableMany(REFERRED_CUSTOMER_NORMALIZER)
    );
  }

  private getEndpoint(endpoint: string, userId: string): string {
    return this.occEndpoints.getUrl(endpoint, { userId });
  }
}

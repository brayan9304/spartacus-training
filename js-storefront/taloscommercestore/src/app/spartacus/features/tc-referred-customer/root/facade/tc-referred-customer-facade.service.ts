import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../core';
import { TC_REFERRED_CUSTOMER_CORE_FEATURE } from '../feature-name';

export function tcReferredCustomerFacadeFactory(): TcReferredCustomerFacade {
  return facadeFactory({
    facade: TcReferredCustomerFacade,
    feature: TC_REFERRED_CUSTOMER_CORE_FEATURE,
    methods: [
      'getReferredCustomers',
      'loadReferredCustomers',
      'getReferredCustomersResultLoading',
      'getReferredCustomersResultSuccess',
      'getReferredCustomersResultError',
    ],
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: tcReferredCustomerFacadeFactory,
})
export abstract class TcReferredCustomerFacade {
  /**
   * Returns all referred customers. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load referred customers if those are not already present.
   * The default value is `false`.
   */
  abstract getReferredCustomers(loadIfMissing: boolean): Observable<ReferredCustomer[]>;

  /**
   * loads referred customers for the current user.
   */
  abstract loadReferredCustomers(): void;

  /**
   * Returns the referred customers loading flag
   */
  abstract getReferredCustomersResultLoading(): Observable<boolean>;

  /**
   * Returns the referred customers success flag
   */
  abstract getReferredCustomersResultSuccess(): Observable<boolean>;

  /**
   * Returns the referred customers error flag
   */
  abstract getReferredCustomersResultError(): Observable<boolean>;
}

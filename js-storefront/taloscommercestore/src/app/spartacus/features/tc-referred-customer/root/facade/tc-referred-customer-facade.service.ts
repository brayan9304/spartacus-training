import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../core';
import { TC_REFERRED_CUSTOMER_CORE_FEATURE } from '../feature-name';

export function tcReferredCustomerFacadeFactory(): TcReferredCustomerFacade {
  return facadeFactory({
    facade: TcReferredCustomerFacade,
    feature: TC_REFERRED_CUSTOMER_CORE_FEATURE,
    methods: ['getReferredCustomers', 'loadReferredCustomers'],
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: tcReferredCustomerFacadeFactory,
})
export abstract class TcReferredCustomerFacade {
  /**
   * Gets the referred customers for the current user
   */
  abstract getReferredCustomers(): Observable<ReferredCustomer[]>;

  /**
   * loads referred customers for the current user.
   */
  abstract loadReferredCustomers(): void;
}

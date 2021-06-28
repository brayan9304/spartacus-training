import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../model';
import { TcReferredCustomerAdapter } from './tc-referred-customer.adapter';

@Injectable()
export class TcReferredCustomerConnector {
  constructor(private adapter: TcReferredCustomerAdapter) {}

  public getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    return this.adapter.getReferredCustomers(userId);
  }
}

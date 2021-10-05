import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../model';
import { TcReferredCustomerAdapter } from './tc-referred-customer.adapter';

@Injectable()
export class TcReferredCustomerConnector {
  constructor(private adapter: TcReferredCustomerAdapter) {
  }

  public getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    return this.adapter.getReferredCustomers(userId);
  }

  public addReferredCustomer(userId: string, referredCustomer: ReferredCustomer): Observable<{}> {
    return this.adapter.addReferredCustomer(userId, referredCustomer);
  }

  public updateReferredCustomer(userId: string, email: string, referredCustomer: ReferredCustomer): Observable<{}> {
    return this.adapter.updateReferredCustomer(userId, email, referredCustomer);
  }

  public deleteReferredCustomer(userId: string, email: string): Observable<{}> {
    return this.adapter.deleteReferredCustomer(userId, email);
  }
}

import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../model';

export abstract class TcReferredCustomerAdapter {
  protected constructor() {}

  /**
   * Gets the referred customers for the given user
   * @param userId user id
   */
  abstract getReferredCustomers(userId: string): Observable<ReferredCustomer[]>;

  /**
   * Adds a referred customer for the given user
   * @param userId user id
   * @param referredCustomer referred customer
   */
  abstract addReferredCustomer(userId: string, referredCustomer: ReferredCustomer): Observable<{}>;
}

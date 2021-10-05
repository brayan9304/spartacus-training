import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../model';

export abstract class TcReferredCustomerAdapter {
  protected constructor() {
  }

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

  /**
   * Updates a referred customer for the given user
   * @param userId user id
   * @param email email
   * @param referredCustomer referred customer
   */
  abstract updateReferredCustomer(userId: string, email: string, referredCustomer: ReferredCustomer): Observable<{}>;

  /**
   * Deletes a referred customer for the given user
   * @param userId user id
   * @param email email
   */
  abstract deleteReferredCustomer(userId: string, email: string): Observable<{}>;
}

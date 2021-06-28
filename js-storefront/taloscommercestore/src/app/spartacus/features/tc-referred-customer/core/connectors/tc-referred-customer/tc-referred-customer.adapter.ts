import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../model';

export abstract class TcReferredCustomerAdapter {
  protected constructor() {}

  /**
   * Gets the referred customers for the given user
   * @param userId user id
   */
  abstract getReferredCustomers(userId: string): Observable<ReferredCustomer[]>;
}

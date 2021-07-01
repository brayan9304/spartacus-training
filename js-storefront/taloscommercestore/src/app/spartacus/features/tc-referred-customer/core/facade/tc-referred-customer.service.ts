import { Injectable } from '@angular/core';
import { TcReferredCustomerFacade } from '../../root';
import { iif, Observable } from 'rxjs';
import { ReferredCustomer } from '../model';
import { StateWithReferredCustomers, TcReferredCustomerActions, TcReferredCustomerSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { UserIdService } from '@spartacus/core';

@Injectable()
export class TcReferredCustomerService implements TcReferredCustomerFacade {
  constructor(protected store: Store<StateWithReferredCustomers>, protected userIdService: UserIdService) {}

  /**
   * Returns all referred customers. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load referred customers if those are not already present.
   * The default value is `false`.
   */
  getReferredCustomers(loadIfMissing = true): Observable<ReferredCustomer[]> {
    return iif(
      () => loadIfMissing,
      this.store.pipe(
        select(TcReferredCustomerSelectors.getReferredCustomersValue),
        withLatestFrom(this.getReferredCustomersResultLoading(), this.getReferredCustomersResultSuccess()),
        filter(([, loading]) => !loading),
        tap(([referredCustomers, , success]) => {
          if (!referredCustomers || referredCustomers.length === 0) {
            // avoid infinite loop - if we've already attempted to load referred customers and we got an empty array as the response
            if (!success) {
              this.loadReferredCustomers();
            }
          }
        }),
        filter(([referredCustomers]) => Boolean(referredCustomers)),
        map(([referredCustomers]) => referredCustomers)
      ),
      this.store.pipe(select(TcReferredCustomerSelectors.getReferredCustomersValue))
    );
  }

  loadReferredCustomers(): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcReferredCustomerActions.LoadReferredCustomers(userId)),
      () => {}
    );
  }

  /**
   * Returns the referred customers loading flag
   */
  getReferredCustomersResultLoading(): Observable<boolean> {
    return this.store.pipe(select(TcReferredCustomerSelectors.getReferredCustomersLoading));
  }

  /**
   * Returns the referred customers success flag
   */
  getReferredCustomersResultSuccess(): Observable<boolean> {
    return this.store.pipe(select(TcReferredCustomerSelectors.getReferredCustomersSuccess));
  }

  /**
   * Returns the referred customers error flag
   */
  getReferredCustomersResultError(): Observable<boolean> {
    return this.store.pipe(select(TcReferredCustomerSelectors.getReferredCustomersError));
  }
}

import { Injectable } from '@angular/core';
import { TcReferredCustomerFacade } from '../../root';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../model';
import { StateWithReferredCustomers, TcReferredCustomerActions, TcReferredCustomerSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { UserIdService } from '@spartacus/core';

@Injectable()
export class TcReferredCustomerService implements TcReferredCustomerFacade {
  constructor(protected store: Store<StateWithReferredCustomers>, protected userIdService: UserIdService) {}

  getReferredCustomers(): Observable<ReferredCustomer[]> {
    return this.store.pipe(
      select(TcReferredCustomerSelectors.getReferredCustomersState),
      tap((referredCustomersState) => {
        const attemptedLoad =
          referredCustomersState.loading || referredCustomersState.success || referredCustomersState.error;
        if (!attemptedLoad) {
          this.loadReferredCustomers();
        }
      }),
      map((referredCustomersState) => referredCustomersState.value)
    );
  }

  loadReferredCustomers(): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcReferredCustomerActions.LoadReferredCustomers(userId)),
      () => {}
    );
  }
}

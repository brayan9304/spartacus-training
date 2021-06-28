import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthActions, normalizeHttpError } from '@spartacus/core';
import { TcReferredCustomerActions } from '../actions';
import { TcReferredCustomerConnector } from '../../connectors';

@Injectable()
export class TcReferredCustomerEffects {
  @Effect()
  loadReferredCustomers$: Observable<TcReferredCustomerActions.TcReferredCustomerAction> = this.actions$.pipe(
    ofType(TcReferredCustomerActions.LOAD_REFERRED_CUSTOMERS),
    map((action: any) => action.payload),
    switchMap((userId) => {
      return this.tcReferredCustomerConnector.getReferredCustomers(userId).pipe(
        map((referredCustomers) => {
          return new TcReferredCustomerActions.LoadReferredCustomersSuccess(referredCustomers);
        }),
        catchError((error) => of(new TcReferredCustomerActions.LoadReferredCustomersFail(normalizeHttpError(error))))
      );
    })
  );

  @Effect()
  clearRegistrationDataOnLogin$: Observable<TcReferredCustomerActions.ClearReferredCustomers> = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    map(() => new TcReferredCustomerActions.ClearReferredCustomers())
  );

  constructor(private actions$: Actions, protected tcReferredCustomerConnector: TcReferredCustomerConnector) {}
}

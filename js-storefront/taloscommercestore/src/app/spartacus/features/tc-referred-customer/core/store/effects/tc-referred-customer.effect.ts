import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AuthActions, GlobalMessageService, GlobalMessageType, normalizeHttpError } from '@spartacus/core';
import { TcReferredCustomerActions } from '../actions';
import { TcReferredCustomerConnector } from '../../connectors';
import { TcReferredCustomerFacade } from '../../../root';

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

  @Effect()
  addReferredCustomer$: Observable<TcReferredCustomerActions.TcReferredCustomerAction> = this.actions$.pipe(
    ofType(TcReferredCustomerActions.ADD_REFERRED_CUSTOMER),
    map((action: TcReferredCustomerActions.AddReferredCustomer) => action.payload),
    mergeMap((payload) => {
      return this.tcReferredCustomerConnector.addReferredCustomer(payload.userId, payload.referredCustomer).pipe(
        map((data: any) => {
          return new TcReferredCustomerActions.AddReferredCustomerSuccess(data);
        }),
        catchError((error) => of(new TcReferredCustomerActions.AddReferredCustomerFail(normalizeHttpError(error))))
      );
    })
  );

  /**
   *  Reload referred customers and notify about add success
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnAddSuccess$ = this.actions$.pipe(
    ofType(TcReferredCustomerActions.ADD_REFERRED_CUSTOMER_SUCCESS),
    tap(() => {
      this.tcReferredCustomerFacade.loadReferredCustomers();
      this.showGlobalMessage('referredCustomerForm.referredCustomerAddSuccess');
    })
  );

  /**
   *  Notify about add failure
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnAddFail$ = this.actions$.pipe(
    ofType(TcReferredCustomerActions.ADD_REFERRED_CUSTOMER_FAIL),
    tap(() => {
      this.showGlobalMessage('referredCustomerForm.referredCustomerAddFail');
    })
  );

  constructor(
    private actions$: Actions,
    protected tcReferredCustomerConnector: TcReferredCustomerConnector,
    protected tcReferredCustomerFacade: TcReferredCustomerFacade,
    private messageService: GlobalMessageService
  ) {}

  /**
   * Show global confirmation message with provided text
   */
  private showGlobalMessage(text: string): void {
    this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
}

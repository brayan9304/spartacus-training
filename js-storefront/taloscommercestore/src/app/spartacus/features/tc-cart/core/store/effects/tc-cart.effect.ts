import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActiveCartService, CartActions, GlobalMessageService, GlobalMessageType, normalizeHttpError, SelectiveCartService } from '@spartacus/core';
import { LoadCart } from '@spartacus/core/src/cart/store/actions/cart.action';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { TcCartFacade } from '../../../root';
import { TcCartConnector } from '../../connectors';
import { TcCartActions } from '../actions';

@Injectable()
export class TcCartEffects {
  @Effect()
  saveManyForLater$: Observable<TcCartActions.TcCartAction> = this.actions$.pipe(
    ofType(TcCartActions.SAVE_MANY_FOR_LATER),
    map((action: TcCartActions.SaveManyForLater) => action.payload),
    mergeMap((payload) => {
      return this.tcCartConnector.saveManyForLater(payload.userId, payload.products).pipe(
        map((response: any) => {
          return new TcCartActions.SaveManyForLaterSuccess(payload);
        }),
        catchError((error) => of(new TcCartActions.SaveManyForLaterFail(normalizeHttpError(error)))),
      )
    })
  );

  @Effect()
  saveManyForLaterSuccess$: Observable<LoadCart> = this.actions$.pipe(
    ofType(TcCartActions.SAVE_MANY_FOR_LATER_SUCCESS),
    map((action: TcCartActions.SaveManyForLaterSuccess) => action.payload),
    map((payload) => {
      let cart_payload = {
        ...payload,
        cartId: 'current'
      }
      return new CartActions.LoadCart(cart_payload)
    })
  );

  @Effect()
  getSavedForLater$: Observable<TcCartActions.TcCartAction> = this.actions$.pipe(
    ofType(TcCartActions.GET_SAVED_FOR_LATER),
    map((action: TcCartActions.GetSavedForLater) => action.payload),
    mergeMap((payload) => {
      return this.tcCartConnector.getSavedForLater(payload.userId).pipe(
        map((response: any) => {
          return new TcCartActions.GetSavedForLaterSuccess(response);
        }),
        catchError((error) => of(new TcCartActions.GetSavedForLaterFail(normalizeHttpError(error)))),
      )
    })
  );

  /**
   *  Notify about save success
   */
   @Effect({ dispatch: false })
   showGlobalMessageOnSaveManySuccess$ = this.actions$.pipe(
     ofType(TcCartActions.SAVE_MANY_FOR_LATER_SUCCESS),
     tap(() => {
       this.showGlobalMessage('cartForm.saveManyForLaterSuccess');
     }),
   );

   /**
   *  Notify about save failure
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnSaveManyFail$ = this.actions$.pipe(
    ofType(TcCartActions.SAVE_MANY_FOR_LATER_FAIL),
    tap(() => {
      this.showGlobalMessage('cartForm.saveManyForLaterFail');
    }),
  );


  constructor(
    private actions$: Actions,
    private tcCartConnector: TcCartConnector,
    private tcCartFacade: TcCartFacade,
    private messageService: GlobalMessageService,
    private activeCartService: ActiveCartService
  ) {
  }

  /**
   * Show global confirmation message with provided text
   */
  private showGlobalMessage(text: string): void {
    this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
}
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActiveCartService, CartActions, GlobalMessageService, GlobalMessageType, normalizeHttpError, SelectiveCartService } from '@spartacus/core';
import { LoadCart } from '@spartacus/core/src/cart/store/actions/cart.action';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { TcCartFacade } from '../../../root';
import { TcCartConnector } from '../../connectors';
import { WishList } from '../../model';
import { TcCartActions } from '../actions';

@Injectable()
export class TcCartEffects {
  @Effect()
  saveForLater$: Observable<TcCartActions.TcCartAction> = this.actions$.pipe(
    ofType(TcCartActions.SAVE_FOR_LATER),
    map((action: TcCartActions.SaveForLater) => action.payload),
    mergeMap((payload) => {
      return this.tcCartConnector.saveForLater(payload.userId, payload.entryNumber).pipe(
        map((response: any) => {
          return new TcCartActions.SaveForLaterSuccess(payload);
        }),
        catchError((error) => of(new TcCartActions.SaveForLaterFail(normalizeHttpError(error)))),
      )
    })
  );

  @Effect()
  saveForLaterSuccess$: Observable<TcCartActions.GetSavedForLater | LoadCart> = this.actions$.pipe(
    ofType(TcCartActions.SAVE_FOR_LATER_SUCCESS),
    map((action: TcCartActions.SaveForLaterSuccess) => action.payload),
    switchMap((payload) => {
      const cart_payload = {
        ...payload,
        cartId: 'current'
      }
      return [
        new CartActions.LoadCart(cart_payload),
        new TcCartActions.GetSavedForLater(payload)
      ]
    })
  );

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
  saveManyForLaterSuccess$: Observable<TcCartActions.GetSavedForLater | LoadCart> = this.actions$.pipe(
    ofType(TcCartActions.SAVE_MANY_FOR_LATER_SUCCESS),
    map((action: TcCartActions.SaveManyForLaterSuccess) => action.payload),
    switchMap((payload) => {
      const cart_payload = {
        ...payload,
        cartId: 'current'
      }
      return [
        new CartActions.LoadCart(cart_payload),
        new TcCartActions.GetSavedForLater(payload)
      ]
    })
  );

  @Effect()
  getSavedForLater$: Observable<TcCartActions.TcCartAction> = this.actions$.pipe(
    ofType(TcCartActions.GET_SAVED_FOR_LATER),
    map((action: TcCartActions.GetSavedForLater) => action.payload),
    mergeMap((payload) => {
      return this.tcCartConnector.getSavedForLater(payload.userId).pipe(
        map((response: WishList) => {
          console.log(response);
          
          return new TcCartActions.GetSavedForLaterSuccess(response);
        }),
        catchError((error) => of(new TcCartActions.GetSavedForLaterFail(normalizeHttpError(error)))),
      )
    })
  );

  @Effect()
  removeFromWishList$: Observable<TcCartActions.TcCartAction> = this.actions$.pipe(
    ofType(TcCartActions.REMOVE_FROM_WISHLIST),
    map((action: TcCartActions.RemoveFromWishList) => action.payload),
    mergeMap((payload) => {
      return this.tcCartConnector.removeFromWishList(payload.userId, payload.productCode).pipe(
        map((response: any) => {
          return new TcCartActions.RemoveFromWishListSuccess(payload);
        }),
        catchError((error) => of(new TcCartActions.RemoveFromWishListFail(normalizeHttpError(error))))
      )
    })
  );

  @Effect()
  removeFromWishListSuccess$: Observable<TcCartActions.GetSavedForLater> = this.actions$.pipe(
    ofType(TcCartActions.REMOVE_FROM_WISHLIST_SUCCESS),
    map((action: TcCartActions.RemoveFromWishListSuccess) => action.payload),
    map((payload) => {
      return new TcCartActions.GetSavedForLater(payload);
    })
  );

  @Effect()
  moveToCart$: Observable<TcCartActions.TcCartAction | LoadCart> = this.actions$.pipe(
    ofType(TcCartActions.MOVE_TO_CART),
    map((action: TcCartActions.MoveToCart) => action.payload),
    mergeMap((payload) => {
      return this.tcCartConnector.moveToCart(payload.userId, payload.productCode).pipe(
        map((response: any) => {
          return new TcCartActions.MoveToCartSuccess(payload);
        }),
        catchError((error) => of(new TcCartActions.MoveToCartFail(normalizeHttpError(error))))
      )
    })
  );

  @Effect()
  moveToCartSuccess$: Observable<TcCartActions.GetSavedForLater | LoadCart> = this.actions$.pipe(
    ofType(TcCartActions.MOVE_TO_CART_SUCCESS),
    map((action: TcCartActions.MoveToCartSuccess) => action.payload),
    switchMap((payload) => {
      let cart_payload = {
        ...payload,
        cartId: 'current'
      }
      return [
        new TcCartActions.GetSavedForLater(payload),
        new CartActions.LoadCart(cart_payload)
      ];
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
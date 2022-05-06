import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActiveCartService, GlobalMessageService, GlobalMessageType, normalizeHttpError, SelectiveCartService } from '@spartacus/core';
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
          return new TcCartActions.SaveManyForLaterSuccess(response);
        }),
        catchError((error) => of(new TcCartActions.SaveManyForLaterFail(normalizeHttpError(error)))),
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
    private messageService: GlobalMessageService
  ) {
  }

  /**
   * Show global confirmation message with provided text
   */
  private showGlobalMessage(text: string): void {
    this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
}
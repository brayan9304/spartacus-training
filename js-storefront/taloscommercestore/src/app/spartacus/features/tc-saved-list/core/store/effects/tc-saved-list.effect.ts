import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AuthActions, GlobalMessageService, GlobalMessageType, normalizeHttpError } from '@spartacus/core';
import { TcSavedListActions } from '../actions';
import { TcSavedListConnector } from '../../connectors';
import { TcSavedListFacade } from '../../../root';


@Injectable()
export class TcSavedListEffects {
  @Effect()
  loadSavedLists$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.LOAD_SAVED_LISTS),
    map((action: any) => action.payload),
    switchMap((userId) => {
      return this.tcSavedListConnector.getSavedLists(userId).pipe(
        map((savedLists) => {
          return new TcSavedListActions.LoadSavedListsSuccess(savedLists);
        }),
        catchError((error) => of(new TcSavedListActions.LoadSavedListsFail(normalizeHttpError(error)))),
      );
    }),
  );

  @Effect()
  clearRegistrationDataOnLogin$: Observable<TcSavedListActions.ClearSavedLists> = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    map(() => new TcSavedListActions.ClearSavedLists()),
  );

  @Effect()
  createSavedList$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.ADD_SAVED_LIST),
    map((action: TcSavedListActions.CreateSavedList) => action.payload),
    mergeMap((payload) => {
      return this.tcSavedListConnector.createSavedList(payload.userId, payload.savedList).pipe(
        map((data: any) => {
          return new TcSavedListActions.CreateSavedListSuccess(data);
        }),
        catchError((error) => of(new TcSavedListActions.CreateSavedListFail(normalizeHttpError(error)))),
      );
    }),
  );

  @Effect()
  deleteSavedList$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_SAVED_LIST),
    map((action: TcSavedListActions.DeleteSavedList) => action.payload),
    mergeMap((payload) => {
      return this.tcSavedListConnector
        .deleteSavedList(payload.userId, payload.listId)
        .pipe(
          map((data) => {
            return new TcSavedListActions.DeleteSavedListSuccess(data);
          }),
          catchError((error) =>
            of(new TcSavedListActions.DeleteSavedListFail (normalizeHttpError(error))),
          ),
        );
    }),
  );

  /**
   *  Reload saved list and notify about add success
   */
   @Effect({ dispatch: false })
   showGlobalMessageOnAddSuccess$ = this.actions$.pipe(
     ofType(TcSavedListActions.ADD_SAVED_LIST_SUCCESS),
     tap(() => {
       this.tcSavedListFacade.loadSavedLists();
       this.showGlobalMessage('Add List Success');
     }),
   );


   /**
    *  Reload referred customers and notify about delete success
    */
   @Effect({ dispatch: false })
   showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(
     ofType(TcSavedListActions.DELETE_SAVED_LIST_SUCCESS),
     tap(() => {
       this.tcSavedListFacade.loadSavedLists();
       this.showGlobalMessage('Delete List Success');
     }),
   );

   /**
    *  Notify about add failure
    */
   @Effect({ dispatch: false })
   showGlobalMessageOnAddFail$ = this.actions$.pipe(
     ofType(TcSavedListActions.ADD_SAVED_LIST_FAIL),
     tap(() => {
       this.showGlobalMessage('Add List Fail');
     }),
   );


   /**
    *  Notify about delete failure
    */
   @Effect({ dispatch: false })
   showGlobalMessageOnDeleteFail$ = this.actions$.pipe(
     ofType(TcSavedListActions.DELETE_SAVED_LIST_FAIL),
     tap(() => {
       this.showGlobalMessage('Delete List Fail');
     }),
   );


  constructor(
    private actions$: Actions,
    protected tcSavedListConnector: TcSavedListConnector,
    protected tcSavedListFacade: TcSavedListFacade,
    private messageService: GlobalMessageService,
  ) {
  }

    /**
   * Show global confirmation message with provided text
   */
     private showGlobalMessage(text: string): void {
      this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }

}

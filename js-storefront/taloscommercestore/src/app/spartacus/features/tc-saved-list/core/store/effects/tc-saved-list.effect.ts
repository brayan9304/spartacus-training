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

  getListId: string

  @Effect()
  loadSavedLists$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.LOAD_SAVED_LISTS),
    map((action: any) => action.payload),
    switchMap((userId) => {
      return this.tcSavedListConnector.getSavedLists(userId).pipe(
        map((savedLists) => {
          return new TcSavedListActions.LoadSavedListsSuccess(savedLists);
        }),
        catchError((error) => of(new TcSavedListActions.LoadSavedListsFail(normalizeHttpError(error))))
      );
    })
  );

  @Effect()
  clearRegistrationDataOnLogin$: Observable<TcSavedListActions.ClearSavedLists> = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    map(() => new TcSavedListActions.ClearSavedLists())
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
        catchError((error) => of(new TcSavedListActions.CreateSavedListFail(normalizeHttpError(error))))
      );
    })
  );

  @Effect()
  deleteSavedList$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_SAVED_LIST),
    map((action: TcSavedListActions.DeleteSavedList) => action.payload),
    mergeMap((payload) => {
      return this.tcSavedListConnector.deleteSavedList(payload.userId, payload.listId).pipe(
        map((data) => {
          return new TcSavedListActions.DeleteSavedListSuccess(data);
        }),
        catchError((error) => of(new TcSavedListActions.DeleteSavedListFail(normalizeHttpError(error))))
      );
    })
  );

  @Effect()
  loadSavedListDetail$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.LOAD_SAVED_LIST_DETAIL),
    map((action: any) => action.payload),
    mergeMap((payload) => {
      this.getListId = payload.listId;
      return this.tcSavedListConnector.getSavedListDetail(payload.userId, payload.listId).pipe(
        map((data) => {
          return new TcSavedListActions.LoadSavedListDetailSuccess(data);
        }),
        catchError((error) => of(new TcSavedListActions.LoadSavedListDetailFail(normalizeHttpError(error))))
      );
    })
  );
  
  @Effect()
  addProduct$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.ADD_PRODUCT),
    map((action: TcSavedListActions.AddProduct) => action.payload),
    mergeMap((payload) => {
      this.getListId = payload.listId;
      return this.tcSavedListConnector.addProduct(payload.userId, payload.listId, payload.productCode).pipe(
        map((data: any) => {
          return new TcSavedListActions.AddProductSuccess(data);
        }),
        catchError((error) => of(new TcSavedListActions.AddProductFail(normalizeHttpError(error))))
      );
    })
  );

  @Effect()
  deleteProduct$: Observable<TcSavedListActions.TcSavedListAction> = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_PRODUCT),
    map((action: TcSavedListActions.DeleteProduct) => action.payload),
    mergeMap((payload) => {
      return this.tcSavedListConnector.deleteProduct(payload.userId, payload.listId, payload.productCode).pipe(
        map((data) => {
          return new TcSavedListActions.DeleteProductSuccess(data);
        }),
        catchError((error) => of(new TcSavedListActions.DeleteProductFail(normalizeHttpError(error))))
      );
    })
  );


  /**
   *  Reload saved list and notify about add success
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnAddSuccess$ = this.actions$.pipe(
    ofType(TcSavedListActions.ADD_SAVED_LIST_SUCCESS),
    tap(() => {
      this.tcSavedListFacade.loadSavedLists();
      this.showGlobalMessageConfirmation('savedListForm.savedListAddSuccess');
    })
  );


  /**
   *  Reload referred customers and notify about delete success
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_SAVED_LIST_SUCCESS),
    tap(() => {
      this.tcSavedListFacade.loadSavedLists();
      this.showGlobalMessageConfirmation('savedListForm.savedListDeleteSuccess');
    })
  );

  /**
   *  Notify about add failure
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnAddFail$ = this.actions$.pipe(
    ofType(TcSavedListActions.ADD_SAVED_LIST_FAIL),
    tap(() => {
      this.showGlobalMessageError('savedListForm.savedListAddFail');
    })
  );

  /**
   *  Notify about delete failure
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnDeleteFail$ = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_SAVED_LIST_FAIL),
    tap(() => {
      this.showGlobalMessageError('savedListForm.savedListDeleteFail');
    })
  );

  @Effect({ dispatch: false })
  showGlobalMessageOnAddProduct$ = this.actions$.pipe(
    ofType(TcSavedListActions.ADD_PRODUCT_SUCCESS),
    tap(() => {
      this.tcSavedListFacade.loadSavedListDetail(this.getListId);
      this.showGlobalMessageConfirmation('savedListForm.AddProductSuccess');
    })
  );


  /**
   *  Reload referred customers and notify about delete success
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnDeleteProductSuccess$ = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_PRODUCT_SUCCESS),
    tap(() => {
      this.tcSavedListFacade.loadSavedListDetail(this.getListId);
      this.showGlobalMessageConfirmation('savedListForm.DeleteProductSuccess');
    })
  );

  /**
   *  Notify about add failure
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnAddProductFail$ = this.actions$.pipe(
    ofType(TcSavedListActions.ADD_PRODUCT_FAIL),
    tap(() => {
      this.showGlobalMessageError('savedListForm.AddProductFail');
    })
  );

  /**
   *  Notify about delete failure
   */
  @Effect({ dispatch: false })
  showGlobalMessageOnDeleteProductFail$ = this.actions$.pipe(
    ofType(TcSavedListActions.DELETE_PRODUCT_FAIL),
    tap(() => {
      this.showGlobalMessageError('savedListForm.DeleteProductFail');
    })
  );



  constructor(
    private actions$: Actions,
    protected tcSavedListConnector: TcSavedListConnector,
    protected tcSavedListFacade: TcSavedListFacade,
    private messageService: GlobalMessageService
  ) {}

  /**
   * Show global confirmation message with provided text
   */
  private showGlobalMessageConfirmation(text: string): void {
    this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }

  /**
   * Show global confirmation message with provided text
   */
  private showGlobalMessageError(text: string): void {
    this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_ERROR);
  }

}

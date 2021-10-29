import { Injectable } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { iif, Observable } from 'rxjs';
import { SavedList, SavedListDetail } from '../model';
import { StateWithSavedListDetail, StateWithSavedLists, TcSavedListActions, TcSavedListSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { UserIdService } from '@spartacus/core';

@Injectable()
export class TcSavedListService implements TcSavedListFacade {
  constructor(
    protected store: Store<StateWithSavedLists>,
    protected storeDetail: Store<StateWithSavedListDetail>,
    protected userIdService: UserIdService
  ) {}

  /**
   * Returns all Saved Lists. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load Saved Lists if those are not already present.
   * The default value is `false`.
   */
  getSavedLists(loadIfMissing = true): Observable<SavedList[]> {
    return iif(
      () => loadIfMissing,
      this.store.pipe(
        select(TcSavedListSelectors.getSavedListsValue),
        withLatestFrom(this.getSavedListsResultLoading(), this.getSavedListsResultSuccess()),
        filter(([, loading]) => !loading),
        tap(([savedLists, , success]) => {
          if (!savedLists || savedLists.length === 0) {
            // avoid infinite loop - if we've already attempted to load Saved Lists and we got an empty array as the response
            if (!success) {
              this.loadSavedLists();
            }
          }
        }),
        filter(([savedLists]) => Boolean(savedLists)),
        map(([savedLists]) => savedLists)
      ),
      this.store.pipe(select(TcSavedListSelectors.getSavedListsValue))
    );
  }

  loadSavedLists(): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcSavedListActions.LoadSavedLists(userId)),
      () => {}
    );
  }

  /**
   * Returns the saved lists loading flag
   */
  getSavedListsResultLoading(): Observable<boolean> {
    return this.store.pipe(select(TcSavedListSelectors.getSavedListsLoading));
  }

  /**
   * Returns the saved lists success flag
   */
  getSavedListsResultSuccess(): Observable<boolean> {
    return this.store.pipe(select(TcSavedListSelectors.getSavedListsSuccess));
  }

  /**
   * Returns the saved lists error flag
   */
  getSavedListsResultError(): Observable<boolean> {
    return this.store.pipe(select(TcSavedListSelectors.getSavedListsError));
  }

  createSavedList(savedList: SavedList): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcSavedListActions.CreateSavedList({ userId, savedList })),
      () => {}
    );
  }

  deleteSavedList(listId: string): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcSavedListActions.DeleteSavedList({ userId, listId })),
      () => {}
    );
  }

  //TODO:
  getSavedListDetail(loadIfMissing = true, listId: string): Observable<SavedListDetail> {
    return iif(
      () => loadIfMissing,
      this.storeDetail.pipe(
        select(TcSavedListSelectors.getSavedListDetailValue),
        withLatestFrom(this.getSavedListDetailResultLoading(), this.getSavedListDetailResultSuccess()),
        filter(([, loading]) => !loading),
        tap(([savedListDetail, , success]) => {
          if (!savedListDetail ) {
            // avoid infinite loop - if we've already attempted to load referred customers and we got an empty array as the response
            if (!success) {
              this.loadSavedListDetail(listId);
            }
          }
        }),
        filter(([savedListDetail]) => Boolean(savedListDetail)),
        map(([savedListDetail]) => savedListDetail)
      ),
      this.storeDetail.pipe(select(TcSavedListSelectors.getSavedListDetailValue))
    );
  }

  loadSavedListDetail(listId: string): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.storeDetail.dispatch(new TcSavedListActions.LoadSavedListDetail({userId, listId})),
      () => {}
    );
  }

  /**
   * Returns the saved list detail loading flag
   */
  getSavedListDetailResultLoading(): Observable<boolean> {
    return this.storeDetail.pipe(select(TcSavedListSelectors.getSavedListDetailLoading));
  }

  /**
   * Returns the saved list detail success flag
   */
  getSavedListDetailResultSuccess(): Observable<boolean> {
    return this.storeDetail.pipe(select(TcSavedListSelectors.getSavedListDetailSuccess));
  }

  /**
   * Returns the saved list detail error flag
   */
  getSavedListDetailResultError(): Observable<boolean> {
    return this.storeDetail.pipe(select(TcSavedListSelectors.getSavedListDetailError));
  }

  addProduct(listId: string, productCode: string): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.storeDetail.dispatch(new TcSavedListActions.AddProduct({ userId, listId, productCode })),
      () => {}
    );
  }

  deleteProduct(listId: string, productCode: string): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.storeDetail.dispatch(new TcSavedListActions.DeleteProduct({ userId, listId, productCode })),
      () => {}
    );
  }
}

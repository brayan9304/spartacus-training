import { Injectable } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { iif, Observable } from 'rxjs';
import { SavedList } from '../model';
import { StateWithSavedLists, TcSavedListActions, TcSavedListSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { UserIdService } from '@spartacus/core';

@Injectable()
export class TcSavedListService implements TcSavedListFacade {
  constructor(protected store: Store<StateWithSavedLists>, protected userIdService: UserIdService) {
  }

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
        map(([savedLists]) => savedLists),
      ),
      this.store.pipe(select(TcSavedListSelectors.getSavedListsValue)),
    );
  }

  loadSavedLists(): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcSavedListActions.LoadSavedLits(userId)),
      () => {
      },
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
      () => {
      },
    );
  }

  deleteSavedList(listId: string): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcSavedListActions.DeleteSavedList({ userId, listId })),
      () => {
      },
    );
  }
}

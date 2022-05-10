import { Injectable } from '@angular/core';
import { TcCartFacade } from '../../root';
import { StateWithCart, TcCartActions, TcCartSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { OrderEntry, UserIdService } from '@spartacus/core';
import { iif, Observable } from 'rxjs';
import { WishList } from '../model';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class TcCartService implements TcCartFacade {
  constructor(protected store: Store<StateWithCart>, protected userIdService: UserIdService) {
  }

  saveManyForLater(products: string): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcCartActions.SaveManyForLater({ userId, products })),
      () => {
      },
    );
  }

  loadSavedForLater(): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcCartActions.GetSavedForLater({ userId })),
      () => {
      },
    );
  }

  getSavedForLater(loadIfMissing = true): Observable<OrderEntry[]> {
    return iif(
      () => loadIfMissing,
      this.store.pipe(
        select(TcCartSelectors.getSavedForLaterValue),
        withLatestFrom(this.getWishListResultLoading(), this.getWishListResultSuccess()),
        filter(([, loading]) => !loading),
        tap(([wishList, , success]) => {
          if (!wishList || wishList.entries.length === 0) {
            if (!success) {
              this.loadSavedForLater();
            }
          }
        }),
        filter(([wishList]) => Boolean(wishList)),
        map(([wishList]) => wishList.entries)
      ),
      this.store.pipe(select(TcCartSelectors.getSavedForLaterValue),
                      map((wishList) => wishList.entries))
    );
  }

  getWishListResultLoading(): Observable<boolean> {
    return this.store.pipe(select(TcCartSelectors.getWishListLoading));
  }

  getWishListResultSuccess(): Observable<boolean> {
    return this.store.pipe(select(TcCartSelectors.getWishListSuccess));
  }

  getWishListResultError(): Observable<boolean> {
    return this.store.pipe(select(TcCartSelectors.getWishListError));
  }
}

import { Injectable } from '@angular/core';
import { TcProductCompareFacade } from '../../root';
import { iif, Observable } from 'rxjs';
import { StateWithProductCompare, TcProductCompareActions, TcProductCompareSelectors } from '../store';
import { select, Store } from '@ngrx/store';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { Product, UserIdService } from '@spartacus/core';

@Injectable()
export class TcProductCompareService implements TcProductCompareFacade {
  constructor(protected store: Store<StateWithProductCompare>, protected userIdService: UserIdService) {
  }

  /**
   * Returns all referred customers. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load referred customers if those are not already present.
   * The default value is `false`.
   */
   getProductsToCompare(loadIfMissing = true): Observable<Product[]> {
    return iif(
      () => loadIfMissing,
      this.store.pipe(
        select(TcProductCompareSelectors.getProductCompareValue),
        withLatestFrom(this.getProductsToCompareResultLoading(), this.getProductsToCompareResultSuccess()),
        filter(([, loading]) => !loading),
        tap(([products, , success]) => {
          if (!products || products.length === 0) {
            // avoid infinite loop - if we've already attempted to load referred customers and we got an empty array as the response
            if (!success) {
              this.loadProducts();
            }
          }
        }),
        filter(([products]) => Boolean(products)),
        map(([products]) => products),
      ),
      this.store.pipe(select(TcProductCompareSelectors.getProductCompareValue)),
    );
  }

  loadProducts(): void {
    this.store.dispatch(new TcProductCompareActions.LoadProducts());
  }

  /**
   * Returns the referred customers loading flag
   */
  getProductsToCompareResultLoading(): Observable<boolean> {
    return this.store.pipe(select(TcProductCompareSelectors.getProductCompareLoading));
  }

  /**
   * Returns the referred customers success flag
   */
  getProductsToCompareResultSuccess(): Observable<boolean> {
    return this.store.pipe(select(TcProductCompareSelectors.getProductCompareSuccess));
  }

  /**
   * Returns the referred customers error flag
   */
  getProductsToCompareResultError(): Observable<boolean> {
    return this.store.pipe(select(TcProductCompareSelectors.getProductCompareError));
  }

  addProductsToCompare(product: Product): void {
    this.store.dispatch(new TcProductCompareActions.AddProduct({ product }));
  }

  deleteProductToCompare(productCode: string): void {
    this.store.dispatch(new TcProductCompareActions.DeleteProduct({ productCode }))
  }
}

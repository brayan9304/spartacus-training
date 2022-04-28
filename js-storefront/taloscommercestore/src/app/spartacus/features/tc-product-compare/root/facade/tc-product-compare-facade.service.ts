import { Injectable } from '@angular/core';
import { facadeFactory, Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { TC_PRODUCT_COMPARE_CORE_FEATURE } from '../feature-name';

export function tcProductCompareFacadeFactory(): TcProductCompareFacade {
  return facadeFactory({
    facade: TcProductCompareFacade,
    feature: TC_PRODUCT_COMPARE_CORE_FEATURE,
    methods: [
      'getProductsToCompare',
      'loadProducts',
      'getProductsToCompareResultLoading',
      'getProductsToCompareResultSuccess',
      'getProductsToCompareResultError',
      'addProductsToCompare',
      'deleteProductToCompare',
      'getProductByCode'
    ],
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: tcProductCompareFacadeFactory,
})
export abstract class TcProductCompareFacade {
  /**
   * Returns all products to compare. If `loadIfMissing` parameter is set to `true`, the method triggers the load if referred customers.
   * @param loadIfMissing is set to `true`, the method will load referred customers if those are not already present.
   * The default value is `false`.
   */
  abstract getProductsToCompare(loadIfMissing: boolean): Observable<Product[]>;

  /**
   * loads products to compare by code.
   */
  abstract getProductByCode(productCode: string): Observable<Product[]>;

  /**
   * loads products to compare for the current user.
   */
  abstract loadProducts(): void;

  /**
   * Returns the products to compare loading flag
   */
  abstract getProductsToCompareResultLoading(): Observable<boolean>;

  /**
   * Returns the products to compare success flag
   */
  abstract getProductsToCompareResultSuccess(): Observable<boolean>;

  /**
   * Returns the products to compare error flag
   */
  abstract getProductsToCompareResultError(): Observable<boolean>;

  /**
   * Adds a product to compare
   * @param product to compare
   */
  abstract addProductsToCompare(product: Product): void;

  /**
   * deletes a product to compare
   * @param productCode
   */
  abstract deleteProductToCompare(productCode: string): void;
}

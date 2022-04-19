import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';

export abstract class TcProductCompareAdapter {
  protected constructor() {
  }

  /**
   * Gets the products to compare
   */
  abstract getProductsToCompare(): Observable<Product[]>;

  /**
   * Adds a product to compare component
   * @param product
   */
  abstract addProduct(product: Product): Observable<{}>;

  /**
   * Deletes a product from compare component
   * @param productCode 
   */
  abstract deleteProduct(productCode: string): Observable<{}>;
}

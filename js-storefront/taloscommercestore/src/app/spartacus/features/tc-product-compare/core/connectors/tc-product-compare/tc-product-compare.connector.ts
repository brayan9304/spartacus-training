import { Injectable } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { TcProductCompareAdapter } from './tc-product-compare.adapter';

@Injectable()
export class TcProductCompareConnector {
  constructor(private adapter: TcProductCompareAdapter) {
  }

  public getProductsToCompare(): Observable<Product[]> {
    return this.adapter.getProductsToCompare();
  }

  public addProduct(product: Product): Observable<{}> {
    return this.adapter.addProduct(product);
  }

  public deleteProduct(productCode: string): Observable<{}> {
    return this.adapter.deleteProduct(productCode);
  }
}

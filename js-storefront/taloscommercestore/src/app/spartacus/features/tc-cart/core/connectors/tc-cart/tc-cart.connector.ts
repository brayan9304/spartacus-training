import { Injectable } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { TcCartAdapter } from './tc-cart.adapter';

@Injectable()
export class TcCartConnector {
  constructor(protected adapter: TcCartAdapter) {}

  public saveForLater(userId: string, entryNumber: number): Observable<{}> {
    return this.adapter.saveForLater(userId, entryNumber);
  }

  public saveManyForLater(userId: string, products: string): Observable<{}> {
    return this.adapter.saveManyForLater(userId, products);
  }

  public getSavedForLater(userId: string): Observable<{}> {
    return this.adapter.getSavedForLater(userId);
  }

  public removeFromWishList(userId: string, productCode: string): Observable<{}> {
    return this.adapter.removeFromWishList(userId, productCode);
  }

  public moveToCart(userId: string, productCode: string): Observable<{}> {
    return this.adapter.moveToCart(userId, productCode);
  }
}
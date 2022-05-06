import { Injectable } from '@angular/core';
import { OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { TcCartAdapter } from './tc-cart.adapter';

@Injectable()
export class TcCartConnector {
  constructor(protected adapter: TcCartAdapter) {}

  public saveManyForLater(userId: string, products: OrderEntry[]): Observable<{}> {
    return this.adapter.saveManyForLater(userId, products);
  }
}
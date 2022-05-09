import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcCartStateService {

  private readonly _productsSelect = new BehaviorSubject<boolean>(false);

  // Exposed observable (read-only).
  readonly productsSelect$ = this._productsSelect.asObservable();

  constructor() { }

  getProductsSelect (): boolean {
    return this._productsSelect.getValue();
  }

  private _setProductsSelect(value: boolean) {
    this._productsSelect.next(value);
  }

  changeProductsSelect() {
    this._setProductsSelect(!this.getProductsSelect());
  }
}

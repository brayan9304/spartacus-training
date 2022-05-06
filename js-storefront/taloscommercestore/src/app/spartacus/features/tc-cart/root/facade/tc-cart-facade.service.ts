import { Injectable } from '@angular/core';
import { facadeFactory, OrderEntry } from '@spartacus/core';
import { TC_CART_CORE_FEATURE } from '../feature-name';

export function tcCartFacadeFactory(): TcCartFacade {
  return facadeFactory({
    facade: TcCartFacade,
    feature: TC_CART_CORE_FEATURE,
    methods: [
      'saveManyForLater'
    ],
  });
}

@Injectable({
  providedIn: 'root',
  useFactory: tcCartFacadeFactory,
})
export abstract class TcCartFacade {
  abstract saveManyForLater(products: string): void;
}

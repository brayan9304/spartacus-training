import { Provider } from '@angular/core';
import { TcCartFacade } from '../../root';
import { TcCartService } from './tc-cart.service';

export const facadeProviders: Provider[] = [
  TcCartService,
  {
    provide: TcCartFacade,
    useExisting: TcCartService,
  },
];

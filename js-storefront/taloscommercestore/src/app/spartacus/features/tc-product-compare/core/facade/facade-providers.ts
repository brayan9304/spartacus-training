import { Provider } from '@angular/core';
import { TcProductCompareFacade } from '../../root';
import { TcProductCompareService } from './tc-product-compare.service';

export const facadeProviders: Provider[] = [
  TcProductCompareService,
  {
    provide: TcProductCompareFacade,
    useExisting: TcProductCompareService,
  },
];

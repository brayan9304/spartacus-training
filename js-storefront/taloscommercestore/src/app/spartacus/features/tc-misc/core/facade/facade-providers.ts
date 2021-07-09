import { Provider } from '@angular/core';
import { TcMiscService } from './tc-misc.service';
import { TcMiscFacade } from '../../root';

export const facadeProviders: Provider[] = [
  TcMiscService,
  {
    provide: TcMiscFacade,
    useExisting: TcMiscService,
  },
];

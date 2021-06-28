import { Provider } from '@angular/core';
import { TcReferredCustomerFacade } from '../../root';
import { TcReferredCustomerService } from './tc-referred-customer.service';

export const facadeProviders: Provider[] = [
  TcReferredCustomerService,
  {
    provide: TcReferredCustomerFacade,
    useExisting: TcReferredCustomerService,
  },
];

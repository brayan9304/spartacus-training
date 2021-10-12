import { Provider } from '@angular/core';
import { TcSavedListFacade } from '../../root';
import { TcSavedListService } from './tc-saved-list.service';

export const facadeProviders: Provider[] = [
  TcSavedListService,
  {
    provide: TcSavedListFacade,
    useExisting: TcSavedListService,
  },
];

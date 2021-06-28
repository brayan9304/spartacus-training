import { NgModule } from '@angular/core';
import { TcReferredCustomerCoreModule } from './core';
import { TcReferredCustomerOccModule } from './occ';
import { TcReferredCustomerComponentsModule } from './components';

@NgModule({
  declarations: [],
  imports: [TcReferredCustomerCoreModule, TcReferredCustomerOccModule, TcReferredCustomerComponentsModule],
})
export class TcReferredCustomerModule {}

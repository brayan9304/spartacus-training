import { NgModule } from '@angular/core';
import { TcReferredCustomerConnectorModule } from './connectors/tc-referred-customer-connector.module';
import { TcReferredCustomerStoreModule } from './store/tc-referred-customer-store.module';
import { facadeProviders } from './facade';

@NgModule({
  imports: [TcReferredCustomerStoreModule, TcReferredCustomerConnectorModule],
  providers: [...facadeProviders],
})
export class TcReferredCustomerCoreModule {}

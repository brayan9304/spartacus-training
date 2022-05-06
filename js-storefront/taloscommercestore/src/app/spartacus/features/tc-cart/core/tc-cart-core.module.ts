import { NgModule } from '@angular/core';
import { TcCartConnectorModule } from './connectors/tc-cart-connector.module';
import { TcCartStoreModule } from './store/tc-cart-store.module';
import { facadeProviders } from './facade';

@NgModule({
  imports: [TcCartStoreModule, TcCartConnectorModule],
  providers: [...facadeProviders],
})
export class TcCartCoreModule {}

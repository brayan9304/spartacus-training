import { NgModule } from '@angular/core';
import { TcProductCompareConnectorModule } from './connectors/tc-product-compare-connector.module';
import { TcProductCompareStoreModule } from './store/tc-product-compare-store.module';
import { facadeProviders } from './facade';

@NgModule({
  imports: [TcProductCompareStoreModule, TcProductCompareConnectorModule],
  providers: [...facadeProviders],
})
export class TcProductCompareCoreModule {}

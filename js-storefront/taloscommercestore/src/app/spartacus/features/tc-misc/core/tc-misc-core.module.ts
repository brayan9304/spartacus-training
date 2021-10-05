import { NgModule } from '@angular/core';
import { TcMiscStoreModule } from './store';
import { TcMiscConnector } from './connectors';
import { facadeProviders } from './facade';

@NgModule({
  imports: [TcMiscStoreModule],
  providers: [TcMiscConnector, ...facadeProviders],
})
export class TcMiscCoreModule {}

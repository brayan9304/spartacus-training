import { NgModule } from '@angular/core';
import { TcSavedListConnectorModule } from './connectors/tc-saved-list-connector.module';
import { TcSavedListStoreModule } from './store/tc-saved-list-store.module';
import { facadeProviders } from './facade';



@NgModule({
  imports: [TcSavedListStoreModule, TcSavedListConnectorModule],
  providers: [...facadeProviders],
})
export class TcSavedListCoreModule { }

import { NgModule } from '@angular/core';
import { TcSavedListCoreModule } from './core';
import { TcSavedListComponentsModule } from './components';
import { TcSavedListOccModule } from './occ';

@NgModule({
  declarations: [],
  imports: [TcSavedListComponentsModule, TcSavedListOccModule, TcSavedListCoreModule],
})
export class TcSavedListModule {}

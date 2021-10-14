import { NgModule } from '@angular/core';
import { TcMiscCoreModule } from './core';
import { TcMiscOccModule } from './occ';

@NgModule({
  imports: [TcMiscCoreModule, TcMiscOccModule],
})
export class TcMiscModule {}

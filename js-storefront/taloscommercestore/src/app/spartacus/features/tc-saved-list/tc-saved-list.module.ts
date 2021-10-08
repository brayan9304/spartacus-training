import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListComponentsModule } from './components';
import { TcSavedListOccModule } from './occ/tc-saved-list-occ.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TcSavedListComponentsModule,
    TcSavedListOccModule,
  ]
})
export class TcSavedListModule { }

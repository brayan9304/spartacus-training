import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListListModule } from './tc-saved-list-list/tc-saved-list-list.module';
import { TcSavedListDetailModule } from './tc-saved-list-detail/tc-saved-list-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TcSavedListListModule,
    TcSavedListDetailModule,
  ]
})
export class TcSavedListComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListListComponent } from './tc-saved-list-list/tc-saved-list-list.component';



@NgModule({
  declarations: [TcSavedListListComponent],
  imports: [
    CommonModule
  ],
  exports : [TcSavedListListComponent],
  entryComponents: [TcSavedListListComponent],
})
export class TcSavedListComponentsModule { }

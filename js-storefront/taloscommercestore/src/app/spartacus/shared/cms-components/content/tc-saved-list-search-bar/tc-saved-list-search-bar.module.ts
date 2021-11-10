import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListSearchBarComponent } from './tc-saved-list-search-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TcSavedListSearchBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TcSavedListSearchBarComponent]
})
export class TcSavedListSearchBarModule { }

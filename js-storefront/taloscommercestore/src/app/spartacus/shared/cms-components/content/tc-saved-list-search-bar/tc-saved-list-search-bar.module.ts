import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListSearchBarComponent } from './tc-saved-list-search-bar.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@spartacus/storefront';



@NgModule({
  declarations: [TcSavedListSearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [TcSavedListSearchBarComponent]
})
export class TcSavedListSearchBarModule { }

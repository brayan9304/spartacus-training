import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCartComponent } from './tc-cart/tc-cart.component';
import { TcWishListComponent } from './tc-wish-list/tc-wish-list.component';



@NgModule({
  declarations: [TcCartComponent, TcWishListComponent],
  imports: [
    CommonModule
  ]
})
export class TcCartComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCartComponent } from './tc-cart/tc-cart.component';
import { TcWishListComponent } from './tc-wish-list/tc-wish-list.component';
import { provideDefaultConfig } from '@spartacus/core';



@NgModule({
  declarations: [TcCartComponent, TcWishListComponent],
  imports: [
    CommonModule
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        CartComponent: {
          component: TcCartComponent,
        }
      }
    })
  ]
})
export class TcCartComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCartComponent } from './tc-cart/tc-cart.component';
import { TcWishListComponent } from './tc-wish-list/tc-wish-list.component';
import { CartModule, CheckoutModule, CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { PromotionsModule } from '@spartacus/storefront';



@NgModule({
  declarations: [TcCartComponent, TcWishListComponent],
  imports: [
    CommonModule,
    I18nModule,
    PromotionsModule,
    CheckoutModule,
    CartModule
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        CartComponent: {
          component: TcCartComponent,
        }
      }
    } as CmsConfig)
  ]
})
export class TcCartComponentsModule { }

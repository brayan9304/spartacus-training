import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCartComponent } from './tc-cart/tc-cart.component';
import { TcWishListComponent } from './tc-wish-list/tc-wish-list.component';
import { AuthModule, CartModule, CheckoutModule, CmsConfig, FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { CartSharedModule, PromotionsModule } from '@spartacus/storefront';
import { TcCartTotalsComponent } from './tc-cart-totals/tc-cart-totals.component';
import { TcCartItemListComponent } from './tc-cart-item-list/tc-cart-item-list.component';
import { TcCartCoreModule } from '../core';



@NgModule({
  declarations: [TcCartComponent, TcWishListComponent, TcCartTotalsComponent, TcCartItemListComponent],
  imports: [
    CommonModule,
    I18nModule,
    PromotionsModule,
    CheckoutModule,
    CartModule,
    CartSharedModule,
    FeaturesConfigModule,
    UrlModule,
    TcCartCoreModule
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        CartComponent: {
          component: TcCartComponent,
        },
        CartTotalsComponent: {
          component: TcCartTotalsComponent,
        }
      }
    } as CmsConfig)
  ]
})
export class TcCartComponentsModule { }

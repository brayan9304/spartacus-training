import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCartComponent } from './tc-cart/tc-cart.component';
import { TcWishListComponent } from './tc-wish-list/tc-wish-list.component';
import { AuthModule, CartModule, CheckoutModule, CmsConfig, FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { CartSharedModule, ItemCounterModule, MediaModule, OutletModule, PromotionsModule } from '@spartacus/storefront';
import { TcCartTotalsComponent } from './tc-cart-totals/tc-cart-totals.component';
import { TcCartItemListComponent } from './tc-cart-item-list/tc-cart-item-list.component';
import { TcSaveForLaterComponent } from './tc-save-for-later/tc-save-for-later.component';
import { TcCartItemComponent } from './tc-cart-item/tc-cart-item.component';



@NgModule({
  declarations: [TcCartComponent, TcWishListComponent, TcCartTotalsComponent, TcCartItemListComponent, TcSaveForLaterComponent, TcCartItemComponent],
  imports: [
    CommonModule,
    I18nModule,
    PromotionsModule,
    CheckoutModule,
    CartModule,
    CartSharedModule,
    FeaturesConfigModule,
    UrlModule,
    OutletModule,
    ItemCounterModule,
    MediaModule
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        CartComponent: {
          component: TcCartComponent,
        },
        CartTotalsComponent: {
          component: TcCartTotalsComponent,
        },
        SaveForLaterComponent: {
          component: TcSaveForLaterComponent
        }
      }
    } as CmsConfig)
  ]
})
export class TcCartComponentsModule { }

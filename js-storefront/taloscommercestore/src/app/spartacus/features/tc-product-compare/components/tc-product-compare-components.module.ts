import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { AddToCartModule, IconModule, MediaModule, OutletModule, SpinnerModule, StarRatingModule } from '@spartacus/storefront';
import { TcProductCompareComponent } from './tc-product-compare/tc-product-compare.component';
import { RouterModule } from '@angular/router';
import { TcProductCompareCoreModule } from '../core';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SpinnerModule,
    UrlModule,
    I18nModule,
    IconModule,
    MediaModule,
    StarRatingModule,
    TcProductCompareCoreModule,
    AddToCartModule,
    OutletModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        ProductCompareComponent: {
          component: TcProductCompareComponent
        }
      }
    } as CmsConfig)
  ],
  declarations: [TcProductCompareComponent],
  exports: [TcProductCompareComponent],
  entryComponents: [TcProductCompareComponent]
})
export class TcProductCompareComponentsModule { }

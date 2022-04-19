import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { IconModule, SpinnerModule } from '@spartacus/storefront';
import { TcProductCompareComponent } from './tc-product-compare/tc-product-compare.component';
import { RouterModule } from '@angular/router';
import { TcProductCompareCoreModule } from '../core';



@NgModule({
  declarations: [TcProductCompareComponent],
  imports: [
    CommonModule,
    RouterModule,
    SpinnerModule,
    UrlModule,
    I18nModule,
    IconModule,
    TcProductCompareCoreModule
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
  exports: [TcProductCompareComponent],
  entryComponents: [TcProductCompareComponent]
})
export class TcProductCompareComponentsModule { }

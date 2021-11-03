import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListDetailComponent } from './tc-saved-list-detail.component';
import { CmsConfig, ConfigModule, I18nModule, UrlModule} from '@spartacus/core';
import { IconModule, MediaModule, SpinnerModule } from '@spartacus/storefront';
import { StarRatingModule } from '@spartacus/storefront';
import { AddToCartModule } from '@spartacus/storefront';




@NgModule({
  declarations: [TcSavedListDetailComponent],
  imports: [
    AddToCartModule,
    CommonModule,
    MediaModule,
    I18nModule,
    AddToCartModule,
    IconModule,
    StarRatingModule,
    SpinnerModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AccountSavedListDetailComponent: {
          component: TcSavedListDetailComponent,
        },
      },
    } as CmsConfig),
  ],

  entryComponents: [TcSavedListDetailComponent],
  exports: [TcSavedListDetailComponent],
})
export class TcSavedListDetailModule {}

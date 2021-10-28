import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OutletModule } from '@spartacus/storefront';
import { ViewConfig } from '@spartacus/storefront';
import {
  ItemCounterModule,
  ListNavigationModule,
  MediaModule,
  SpinnerModule,
  StarRatingModule,
} from '@spartacus/storefront';
import { AddToCartModule } from '@spartacus/storefront';
import { IconModule } from '@spartacus/storefront';
import { defaultScrollConfig } from '@spartacus/storefront';
import { TcProductListComponent } from './container/tc-product-list.component';
import { TcProductScrollComponent } from './container/tc-product-scroll/tc-product-scroll.component';
import { TcProductGridItemComponent } from './tc-product-grid-item/tc-product-grid-item.component';
import { TcProductListItemComponent } from './tc-product-list-item/tc-product-list-item.component';
import { TcProductViewComponent } from './tc-product-view/tc-product-view.component';
import { TcSavedListModalModule } from 'src/app/spartacus/shared/cms-components/content/tc-saved-list-modal/tc-saved-list-modal.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    FeaturesConfigModule,
    OutletModule,
    TcSavedListModalModule
  ],
  providers: [
    provideDefaultConfig(<ViewConfig>defaultScrollConfig),
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: TcProductListComponent,
        },
        ProductGridComponent: {
          component: TcProductListComponent,
        },
        SearchResultsListComponent: {
          component: TcProductListComponent,
        },
      },
    }),
  ],
  declarations: [
    TcProductListComponent,
    TcProductListItemComponent,
    TcProductGridItemComponent,
    TcProductViewComponent,
    TcProductScrollComponent,
  ],
  exports: [
    TcProductListComponent,
    TcProductListItemComponent,
    TcProductGridItemComponent,
    TcProductViewComponent,
    TcProductScrollComponent,
  ],
})
export class TcProductListModule {}

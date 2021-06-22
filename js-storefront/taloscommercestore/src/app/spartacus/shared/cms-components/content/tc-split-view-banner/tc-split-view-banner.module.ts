import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { TcSplitViewBannerComponent } from './tc-split-view-banner.component';
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [TcSplitViewBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        TcSplitViewBannerComponent: {
          component: TcSplitViewBannerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcSplitViewBannerComponent],
  exports: [TcSplitViewBannerComponent],
})
export class TcSplitViewBannerModule {}

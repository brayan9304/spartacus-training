import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { TcSplitViewBannerComponent } from './tc-split-view-banner.component';
import { MediaModule, IconModule } from '@spartacus/storefront';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TcSplitViewBannerComponent],
  imports: [
    ReactiveFormsModule,
    NgSelectModule, 
    FormsModule,
    CommonModule,
    MediaModule,
    I18nModule,
    IconModule,
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcContainerComponent } from './tc-container-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [TcContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CustomBannerComponent: {
            component: TcContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcContainerComponent],
  exports: [TcContainerComponent],
})
export class TcContainerModule { }

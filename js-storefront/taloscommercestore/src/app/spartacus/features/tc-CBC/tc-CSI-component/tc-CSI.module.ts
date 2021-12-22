import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCSI } from './tc-CSI.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCSI],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CSIComponent: {
          component: TcCSI,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCSI],
  exports: [TcCSI],
})
export class TcCSIModule { }

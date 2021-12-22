import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCardItemComponent } from './tc-card-item-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCardItemComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleItemComponent: {
          component: TcCardItemComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCardItemComponent],
  exports: [TcCardItemComponent],
})
export class TcCardItemModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCardItemComponent } from './tc-card-item-component.component';
import { IconModule, MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCardItemComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ItemComponent: {
          component: TcCardItemComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCardItemComponent],
  exports: [TcCardItemComponent],
})
export class TcCardItemModule { }

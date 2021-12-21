import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCollageItemComponent } from './tc-collage-item-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCollageItemComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleItem: {
          component: TcCollageItemComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCollageItemComponent],
  exports: [TcCollageItemComponent],
})
export class TcCollageItemModule { }

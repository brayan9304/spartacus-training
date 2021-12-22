import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcContainerItemComponent } from './tc-container-item-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcContainerItemComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CustomSimpleItemComponent: {
          component: TcContainerItemComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcContainerItemComponent],
  exports: [TcContainerItemComponent],
})
export class TcContainertemModule { }

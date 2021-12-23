import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCustomItemComponent } from './tc-custom-item-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCustomItemComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CustomItemComponent: {
          component: TcCustomItemComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCustomItemComponent],
  exports: [TcCustomItemComponent],
})
export class TcCustomItemModule { }

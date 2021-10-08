import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListDetailComponent } from './tc-saved-list-detail.component';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';



@NgModule({
  declarations: [TcSavedListDetailComponent],
  imports: [
    CommonModule,
    MediaModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AccountSavedListDetailComponent: {
          component: TcSavedListDetailComponent
        }
      }
    } as CmsConfig)
  ],

  entryComponents: [TcSavedListDetailComponent],
  exports: [TcSavedListDetailComponent],
})
export class TcSavedListDetailModule { }

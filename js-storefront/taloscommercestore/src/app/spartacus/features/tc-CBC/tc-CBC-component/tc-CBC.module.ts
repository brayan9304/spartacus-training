import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCBC} from './tc-CBC.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [TcCBC],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CBComponent: {
            component: TcCBC,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCBC],
  exports: [TcCBC],
})
export class TcCBCModule { }

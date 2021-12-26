import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcPageContainerComponent } from './tc-page-container-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcPageContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ContainerPage: {
          component: TcPageContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcPageContainerComponent],
  exports: [TcPageContainerComponent],
})
export class TcPageContainerModule { }

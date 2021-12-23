import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCardContainerComponent } from './tc-card-container-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCardContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CardContainer: {
          component: TcCardContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCardContainerComponent],
  exports: [TcCardContainerComponent],
})
export class TcCardContainerModule { }

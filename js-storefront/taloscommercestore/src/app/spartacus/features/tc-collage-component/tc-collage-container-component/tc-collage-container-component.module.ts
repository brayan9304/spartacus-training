import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCollageContainerComponent } from './tc-collage-container-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCollageContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleItemContainer: {
          component: TcCollageContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCollageContainerComponent],
  exports: [TcCollageContainerComponent],
})
export class TcCollageContainerModule { }

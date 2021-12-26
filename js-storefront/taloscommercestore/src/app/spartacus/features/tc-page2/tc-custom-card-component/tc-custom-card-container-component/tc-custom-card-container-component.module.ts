import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCustomCardContainerComponent } from './tc-custom-card-container-component.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcCustomCardContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CustomCardContainer: {
          component: TcCustomCardContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcCustomCardContainerComponent],
  exports: [TcCustomCardContainerComponent],
})
export class TcCustomCardContainerModule { }

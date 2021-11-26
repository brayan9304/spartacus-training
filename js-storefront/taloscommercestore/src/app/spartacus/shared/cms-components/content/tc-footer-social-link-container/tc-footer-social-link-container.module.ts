import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcFooterSocialLinkContainerComponent } from './tc-footer-social-link-container.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcFooterSocialLinkContainerComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FooterSocialLinkContainer: {
          component: TcFooterSocialLinkContainerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcFooterSocialLinkContainerComponent],
  exports: [TcFooterSocialLinkContainerComponent],
})
export class TcFooterSocialLinkContainerModule { }

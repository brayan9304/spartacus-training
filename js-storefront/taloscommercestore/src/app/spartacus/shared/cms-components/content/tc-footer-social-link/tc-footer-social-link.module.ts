import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcFooterSocialLinkComponent } from './tc-footer-social-link.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [TcFooterSocialLinkComponent],
  imports: [
    PageComponentModule,
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FooterSocialLink: {
          component: TcFooterSocialLinkComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcFooterSocialLinkComponent],
  exports: [TcFooterSocialLinkComponent],
})
export class TcFooterSocialLinkModule { }

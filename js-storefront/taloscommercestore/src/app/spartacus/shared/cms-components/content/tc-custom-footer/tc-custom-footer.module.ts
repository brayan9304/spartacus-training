import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { GenericLinkModule, NavigationModule } from '@spartacus/storefront';
import { FooterCustomNavigationComponent } from './tc-custom-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    GenericLinkModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        FooterNavigationComponent: {
          component: FooterCustomNavigationComponent,
        },
      },
    }),
  ],
  declarations: [FooterCustomNavigationComponent],
  exports: [FooterCustomNavigationComponent],
})
export class TcFooterCustomNavigationModule {}

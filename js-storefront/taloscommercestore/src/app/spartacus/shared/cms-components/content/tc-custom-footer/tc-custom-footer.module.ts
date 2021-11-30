import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { GenericLinkModule, NavigationModule, PageSlotModule } from '@spartacus/storefront';
import { TcCustomNavigationComponentModule } from 'src/app/spartacus/features/tc-custom-navigation-component';
import { MaterialModule } from 'src/app/spartacus/material/material.module';
import { FooterCustomNavigationComponent } from './tc-custom-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    GenericLinkModule,
    I18nModule,
    MaterialModule,
    TcCustomNavigationComponentModule,
    PageSlotModule
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

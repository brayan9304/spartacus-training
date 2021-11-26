import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { GenericLinkModule, IconModule, NavigationModule } from '@spartacus/storefront';
import { TcCustomNavigationComponentModule } from 'src/app/spartacus/features/tc-custom-navigation-component';
import { MaterialModule } from 'src/app/spartacus/material/material.module';
import { CustomFooterBottomComponent } from './tc-custom-footer-bottom.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    GenericLinkModule,
    I18nModule,
    MaterialModule,
    TcCustomNavigationComponentModule,
    IconModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CustomFooterBottom: {
          component: CustomFooterBottomComponent,
        },
      },
    }),
  ],
  declarations: [CustomFooterBottomComponent],
  exports: [CustomFooterBottomComponent],
})
export class TcCutomFooterBottomNavigationModule {}

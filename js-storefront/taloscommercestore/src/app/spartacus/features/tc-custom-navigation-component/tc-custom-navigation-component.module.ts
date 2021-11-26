import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { GenericLinkModule, IconModule } from '@spartacus/storefront';
import { CustomNavigationUIComponent } from './tc-custom-navigation-component.component';



@NgModule({
  declarations: [CustomNavigationUIComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    GenericLinkModule,
    I18nModule,
  ],
  exports: [CustomNavigationUIComponent],
})
export class TcCustomNavigationComponentModule { }

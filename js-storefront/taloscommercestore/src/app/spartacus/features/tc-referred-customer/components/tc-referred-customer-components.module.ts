import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormErrorsModule, IconModule, SpinnerModule } from '@spartacus/storefront';
import { TcReferredCustomerCoreModule } from '../core';
import { AuthGuard, CmsConfig, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { TcReferredCustomerListComponent } from './tc-referred-customer-list/tc-referred-customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorsModule,
    RouterModule,
    SpinnerModule,
    UrlModule,
    TcReferredCustomerCoreModule,
    I18nModule,
    IconModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        AccountReferredCustomersComponent: {
          component: TcReferredCustomerListComponent,
          guards: [AuthGuard],
        },
      },
    } as CmsConfig),
  ],
  declarations: [TcReferredCustomerListComponent],
  exports: [TcReferredCustomerListComponent],
  entryComponents: [TcReferredCustomerListComponent],
})
export class TcReferredCustomerComponentsModule {}

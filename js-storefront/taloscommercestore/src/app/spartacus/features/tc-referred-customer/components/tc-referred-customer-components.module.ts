import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormErrorsModule, IconModule, SpinnerModule } from '@spartacus/storefront';
import { TcReferredCustomerCoreModule } from '../core';
import { AuthGuard, CmsConfig, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { TcReferredCustomerListComponent } from './tc-referred-customer-list/tc-referred-customer-list.component';
import { TcReferredCustomerFormComponent } from './tc-referred-customer-form/tc-referred-customer-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TcMiscModule } from '@col-features/tc-misc';

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
    NgSelectModule,
    TcMiscModule,
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
  declarations: [TcReferredCustomerListComponent, TcReferredCustomerFormComponent],
  exports: [TcReferredCustomerListComponent, TcReferredCustomerFormComponent],
  entryComponents: [TcReferredCustomerListComponent, TcReferredCustomerFormComponent],
})
export class TcReferredCustomerComponentsModule {}

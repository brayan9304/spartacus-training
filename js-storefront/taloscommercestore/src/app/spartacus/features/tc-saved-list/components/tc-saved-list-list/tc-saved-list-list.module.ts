import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListListComponent } from './tc-saved-list-list.component';
import { AuthGuard, CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { IconModule } from '@spartacus/storefront';



@NgModule({
  declarations: [TcSavedListListComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        AccountSavedListsComponent: {
          component: TcSavedListListComponent,
          guards: [AuthGuard],
        },
      },
    } as CmsConfig),
  ],
  exports: [
    TcSavedListListComponent
  ],
})
export class TcSavedListListModule { }

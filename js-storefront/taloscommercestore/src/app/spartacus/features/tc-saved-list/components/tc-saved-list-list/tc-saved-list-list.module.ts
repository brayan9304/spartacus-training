import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListListComponent } from './tc-saved-list-list.component';
import { AuthGuard, CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { IconModule, SpinnerModule } from '@spartacus/storefront';
import { TcSavedListModalModule } from '../../../../shared/cms-components/content/tc-saved-list-modal/tc-saved-list-modal.module';
import { PipesModule, TcSavedListSearchBarModule } from 'src/app/spartacus/shared';



@NgModule({
  declarations: [TcSavedListListComponent],
  imports: [
    PipesModule,
    TcSavedListSearchBarModule,
    CommonModule,
    RouterModule,
    IconModule,
    I18nModule,
    TcSavedListModalModule,
    SpinnerModule,
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

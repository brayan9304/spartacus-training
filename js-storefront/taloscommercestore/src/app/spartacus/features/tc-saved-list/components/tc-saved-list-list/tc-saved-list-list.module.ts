import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListListComponent } from './tc-saved-list-list.component';
import { AuthGuard, CmsConfig, provideDefaultConfig } from '@spartacus/core';



@NgModule({
  declarations: [TcSavedListListComponent],
  imports: [
    CommonModule
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListListComponent } from './tc-saved-list-list/tc-saved-list-list.component';
import { AuthGuard, CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';




@NgModule({
  declarations: [TcSavedListListComponent],
  imports: [
    CommonModule,
    I18nModule,
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        AccountSavedListComponent: {
          component: TcSavedListListComponent,
          guards: [AuthGuard],
        },
      },
    } as CmsConfig),
  ],
  exports : [TcSavedListListComponent],
  entryComponents: [TcSavedListListComponent],
})
export class TcSavedListComponentsModule { }

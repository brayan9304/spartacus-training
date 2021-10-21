import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListPdpBtnAddComponent } from './tc-saved-list-pdp-btn-add.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { TcSavedListModalModule } from 'src/app/spartacus/shared/cms-components/content/tc-saved-list-modal/tc-saved-list-modal.module';



@NgModule({
  declarations: [TcSavedListPdpBtnAddComponent],
  imports: [
    CommonModule,
    TcSavedListModalModule,
    ConfigModule.forRoot({
        cmsComponents: {
            StockNotificationComponent: {
            component: TcSavedListPdpBtnAddComponent,
          },
        },
      } as CmsConfig),
  ],
  exports: [
    TcSavedListPdpBtnAddComponent
  ],
})
export class TcSavedListPdpBtnAddModule { }

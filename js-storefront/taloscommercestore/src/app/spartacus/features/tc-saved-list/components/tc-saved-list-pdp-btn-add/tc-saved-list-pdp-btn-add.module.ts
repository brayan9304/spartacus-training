import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListPdpBtnAddComponent } from './tc-saved-list-pdp-btn-add.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { IconModule} from '@spartacus/storefront';



@NgModule({
  declarations: [TcSavedListPdpBtnAddComponent],
  imports: [
    CommonModule,
    IconModule,
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

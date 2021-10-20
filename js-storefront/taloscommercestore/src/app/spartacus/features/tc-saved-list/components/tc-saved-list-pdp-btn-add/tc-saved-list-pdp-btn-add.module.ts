import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListPdpBtnAddComponent } from './tc-saved-list-pdp-btn-add.component';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule} from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [TcSavedListPdpBtnAddComponent],
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule,
    NgSelectModule, 
    FormsModule,
    I18nModule,
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

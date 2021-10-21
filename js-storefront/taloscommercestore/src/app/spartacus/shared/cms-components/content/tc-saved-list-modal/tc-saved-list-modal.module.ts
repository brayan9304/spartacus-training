import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListModalComponent } from './tc-saved-list-modal.component';
import { CmsConfig, ConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import { IconModule} from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { tcSavedListTranslationChunksConfig } from 'src/app/spartacus/features/tc-saved-list/assets';



@NgModule({
  declarations: [TcSavedListModalComponent],
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule,
    NgSelectModule, 
    FormsModule,
    I18nModule,
    IconModule,
  ],
  exports: [
    TcSavedListModalComponent
  ],
  providers: [
    provideConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: tcSavedListTranslationChunksConfig,
      },
    }),
  ],
})
export class TcSavedListModalModule { }

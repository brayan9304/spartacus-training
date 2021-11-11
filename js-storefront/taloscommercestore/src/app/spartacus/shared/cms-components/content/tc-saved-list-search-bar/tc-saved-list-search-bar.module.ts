import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcSavedListSearchBarComponent } from './tc-saved-list-search-bar.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@spartacus/storefront';
import { I18nModule, provideConfig } from '@spartacus/core';
import { tcSavedListTranslationChunksConfig } from 'src/app/spartacus/features/tc-saved-list/assets';



@NgModule({
  declarations: [TcSavedListSearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconModule,
    I18nModule
  ],
  exports: [TcSavedListSearchBarComponent],
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
export class TcSavedListSearchBarModule { }

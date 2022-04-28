import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCompareButtonComponent } from './tc-compare-button.component';
import { I18nModule, provideConfig } from '@spartacus/core';
import { customTranslationChunksConfig } from 'src/app/spartacus/translations';
import { TcProductCompareCoreModule } from 'src/app/spartacus/features/tc-product-compare/core';



@NgModule({
  declarations: [TcCompareButtonComponent],
  imports: [
    CommonModule,
    I18nModule,
    TcProductCompareCoreModule
  ],
  exports: [TcCompareButtonComponent],
  providers: [
    provideConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: customTranslationChunksConfig,
      },
    }),
  ],
})
export class TcCompareButtonModule { }

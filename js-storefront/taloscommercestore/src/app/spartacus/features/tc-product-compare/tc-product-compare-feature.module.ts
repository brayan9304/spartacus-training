import { NgModule } from '@angular/core';
import { TcProductCompareRootModule, TC_PRODUCT_COMPARE_FEATURE } from './root';
import { tcProductCompareTranslationChunksConfig } from './assets';
import { provideConfig } from '@spartacus/core';

@NgModule({
  imports: [
    TcProductCompareRootModule
  ],
  providers: [
    provideConfig({
      featureModules: {
        [TC_PRODUCT_COMPARE_FEATURE]: {
          module: () => import('./tc-product-compare.module').then((m) => m.TcProductCompareModule),
        },
      },
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: tcProductCompareTranslationChunksConfig
      },
    }),
  ],
})
export class TcProductCompareFeatureModule { }

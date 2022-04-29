import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { tcCartTranslationChunksConfig } from './assets';
import { TcCartRootModule, TC_CART_FEATURE } from './root';

@NgModule({
  imports: [TcCartRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [TC_CART_FEATURE]: {
          module: () => import('./tc-cart.module').then((m) => m.TcCartModule),
        }
      },
      cart: {
        selectiveCart: {
          enabled: true,
        }
      },
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: tcCartTranslationChunksConfig,
      },
    })
  ]
})
export class TcCartFeatureModule { }

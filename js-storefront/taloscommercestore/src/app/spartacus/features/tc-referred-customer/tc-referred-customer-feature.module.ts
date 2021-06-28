import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { tcReferredCustomerTranslationChunksConfig } from './assets';
import { TC_REFERRED_CUSTOMER_FEATURE, TcReferredCustomerRootModule } from './root';

@NgModule({
  imports: [TcReferredCustomerRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [TC_REFERRED_CUSTOMER_FEATURE]: {
          module: () => import('./tc-referred-customer.module').then((m) => m.TcReferredCustomerModule),
        },
      },
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: tcReferredCustomerTranslationChunksConfig,
      },
    }),
  ],
})
export class TcReferredCustomerFeatureModule {}

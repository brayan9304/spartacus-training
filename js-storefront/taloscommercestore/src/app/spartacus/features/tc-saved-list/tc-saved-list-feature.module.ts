import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { tcSavedListTranslationChunksConfig } from './assets';
import { TC_SAVED_LIST_FEATURE, TcSavedListRootModule } from './root';

@NgModule({
  imports: [TcSavedListRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [TC_SAVED_LIST_FEATURE]: {
          module: () => import('./tc-saved-list.module').then((m) => m.TcSavedListModule),
        },
      },
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: tcSavedListTranslationChunksConfig,
      },
    }),
  ],
})
export class TcSavedListFeatureModule {}

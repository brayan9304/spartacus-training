import {NgModule} from '@angular/core';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig} from '@spartacus/core';
import {defaultCmsContentProviders, layoutConfig, mediaConfig} from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
        }
      },
    } as OccConfig),
    provideConfig({
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['taloscommerce'],
      },
    } as SiteContextConfig),
    provideConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    } as I18nConfig),
    provideConfig({
      features: {
        level: '3.4'
      }
    } as FeaturesConfig)]
})
export class SpartacusConfigurationModule {
}

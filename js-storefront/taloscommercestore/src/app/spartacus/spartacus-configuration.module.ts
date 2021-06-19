import {NgModule} from '@angular/core';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig} from '@spartacus/core';
import {defaultCmsContentProviders, layoutConfig, mediaConfig} from '@spartacus/storefront';
import {customI18nConfig} from './configurations/custom-i18n-config';
import {customIconsConfig} from './configurations/custom-icons-config';

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
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    } as I18nConfig),
    provideConfig(customI18nConfig),
    provideConfig(customIconsConfig),
    provideConfig({
      features: {
        level: '3.4'
      }
    } as FeaturesConfig)]
})
export class SpartacusConfigurationModule {
}

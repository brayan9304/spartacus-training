import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import {
  defaultCmsContentProviders,
  ImageLoadingStrategy,
  layoutConfig,
  MediaConfig,
  mediaConfig,
} from '@spartacus/storefront';
import { environment } from '@tc-env';

const occConfig: OccConfig = { backend: { occ: {} } };

// only provide the `occ.baseUrl` key if it is explicitly configured, otherwise the value of
// <meta name="occ-backend-base-url" > is ignored.
// This in turn breaks the call to the API aspect in public cloud environments
if (environment.occBaseUrl) {
  occConfig.backend.occ.baseUrl = environment.occBaseUrl;
}
if (environment.prefix) {
  occConfig.backend.occ.prefix = environment.prefix;
} else {
  occConfig.backend.occ.prefix = '/occ/v2/';
}

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig({
      backend: occConfig.backend,
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
        fallbackLang: 'en',
      },
    } as I18nConfig),
    provideConfig({
      imageLoadingStrategy: ImageLoadingStrategy.LAZY,
    } as MediaConfig),
    provideConfig({
      features: {
        level: '3.4',
      },
    } as FeaturesConfig),
  ],
})
export class SpartacusConfigurationModule {}

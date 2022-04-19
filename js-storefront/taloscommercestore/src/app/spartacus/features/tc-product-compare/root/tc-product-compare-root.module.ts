import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideDefaultConfig, provideDefaultConfigFactory } from '@spartacus/core';
import { defaultTcProductCompareLayoutConfig } from './config';
import { TC_PRODUCT_COMPARE_CORE_FEATURE, TC_PRODUCT_COMPARE_FEATURE } from './feature-name';

export function defaultTcProductCompareComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      [TC_PRODUCT_COMPARE_FEATURE]: {
        cmsComponents: ['ProductCompareComponent'],
      },
      // by default core is bundled together with components
      [TC_PRODUCT_COMPARE_CORE_FEATURE]: TC_PRODUCT_COMPARE_FEATURE,
    },
  };
}

@NgModule({
  declarations: [],
  providers: [
    provideConfig(defaultTcProductCompareLayoutConfig),
    provideDefaultConfigFactory(defaultTcProductCompareComponentsConfig),
  ],
})
export class TcProductCompareRootModule {}

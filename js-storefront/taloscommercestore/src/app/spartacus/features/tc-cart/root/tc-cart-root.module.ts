import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideDefaultConfig, provideDefaultConfigFactory } from '@spartacus/core';
import { defaultCartLayoutConfig, tcCartRoutingConfig } from './config';
import { TC_CART_CORE_FEATURE, TC_CART_FEATURE } from './feature-name';

export function defaultTcCartComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      [TC_CART_FEATURE]: {
        cmsComponents: ['CartComponent', 'SaveForLaterComponent', 'cartTotalsComponent'],
      },
      // by default core is bundled together with components
      [TC_CART_CORE_FEATURE]: TC_CART_FEATURE,
    },
  };
}

@NgModule({
  declarations: [],
  providers: [
    provideDefaultConfig(tcCartRoutingConfig),
    provideConfig(defaultCartLayoutConfig),
    provideDefaultConfigFactory(defaultTcCartComponentsConfig),
  ],
})
export class TcCartRootModule {}

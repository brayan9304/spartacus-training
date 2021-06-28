import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideDefaultConfig, provideDefaultConfigFactory } from '@spartacus/core';
import { defaultReferredCustomerLayoutConfig, tcReferredCustomerRoutingConfig } from './config';
import { TC_REFERRED_CUSTOMER_CORE_FEATURE, TC_REFERRED_CUSTOMER_FEATURE } from './feature-name';

export function defaultTcReferredCustomerComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      [TC_REFERRED_CUSTOMER_FEATURE]: {
        cmsComponents: ['AccountReferredCustomersComponent'],
      },
      // by default core is bundled together with components
      [TC_REFERRED_CUSTOMER_CORE_FEATURE]: TC_REFERRED_CUSTOMER_FEATURE,
    },
  };
}

@NgModule({
  declarations: [],
  providers: [
    provideDefaultConfig(tcReferredCustomerRoutingConfig),
    provideConfig(defaultReferredCustomerLayoutConfig),
    provideDefaultConfigFactory(defaultTcReferredCustomerComponentsConfig),
  ],
})
export class TcReferredCustomerRootModule {}

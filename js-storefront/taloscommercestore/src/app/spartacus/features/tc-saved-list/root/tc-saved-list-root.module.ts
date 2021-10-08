import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideDefaultConfig, provideDefaultConfigFactory } from '@spartacus/core';
import { defaultSavedListLayoutConfig, tcSavedListRoutingConfig } from './config';
import { TC_SAVED_LIST_CORE_FEATURE, TC_SAVED_LIST_FEATURE } from './feature-name';


export function defaultTcSavedListComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      [TC_SAVED_LIST_CORE_FEATURE]: {
        cmsComponents: ['AccountReferredCustomersComponent'],
      },
      // by default core is bundled together with components
      [TC_SAVED_LIST_CORE_FEATURE]: TC_SAVED_LIST_FEATURE,
    },
  };
}

@NgModule({
  declarations: [],
  providers: [
    provideDefaultConfig(tcSavedListRoutingConfig),
    provideConfig(defaultSavedListLayoutConfig),
    provideDefaultConfigFactory(defaultTcSavedListComponentsConfig),
  ],
})
export class TcReferredCustomerRootModule {}

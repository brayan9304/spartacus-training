import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfigFactory } from '@spartacus/core';
import { TC_MISC_CORE_FEATURE, TC_MISC_FEATURE } from './feature-name';

export function defaultTcMiscComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      // by default core is bundled together with components
      [TC_MISC_CORE_FEATURE]: TC_MISC_FEATURE,
    },
  };
}

@NgModule({
  providers: [provideDefaultConfigFactory(defaultTcMiscComponentsConfig)],
})
export class TcMiscRootModule {}

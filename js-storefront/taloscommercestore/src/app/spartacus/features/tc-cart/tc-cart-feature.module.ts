import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { TcCartRootModule, TC_CART_FEATURE } from './root';

@NgModule({
  imports: [TcCartRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [TC_CART_FEATURE]: {
          module: () => import('./tc-cart.module').then((m) => m.TcCartModule),
        }
      },
      cart: {
        selectiveCart: {
          enabled: true,
        }
      }
    })
  ]
})
export class TcCartFeatureModule { }

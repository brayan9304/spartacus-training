import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';

const TC_CART_FEATURE = 'tcCart';

@NgModule({
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

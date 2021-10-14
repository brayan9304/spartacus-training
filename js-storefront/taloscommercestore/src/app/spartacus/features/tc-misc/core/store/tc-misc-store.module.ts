import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '@spartacus/core';
import { reducerProvider, reducerToken } from './reducers';
import { effects } from './effects';
import { TC_MISC_FEATURE } from '../../root';

@NgModule({
  imports: [StateModule, StoreModule.forFeature(TC_MISC_FEATURE, reducerToken), EffectsModule.forFeature(effects)],
  providers: [reducerProvider],
})
export class TcMiscStoreModule {}

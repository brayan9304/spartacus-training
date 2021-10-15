import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducerProvider, reducerToken, reducerTokenDetail, reducerProviderDetail} from './reducers';
import { TC_SAVED_LIST_FEATURE, TC_SAVED_LIST_DETAIL_FEATURE } from '../../root';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TC_SAVED_LIST_FEATURE, reducerToken),
    StoreModule.forFeature(TC_SAVED_LIST_DETAIL_FEATURE, reducerTokenDetail),
    EffectsModule.forFeature(effects),
  ],
  providers: [reducerProvider, reducerProviderDetail],
})
export class TcSavedListStoreModule { }

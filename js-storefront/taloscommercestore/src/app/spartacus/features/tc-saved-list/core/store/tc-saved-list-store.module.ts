import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducerProvider, reducerToken, reducerTokenDetail, reducerProviderDetail, reducerProviderCreate, reducerTokenCreate} from './reducers';
import { TC_SAVED_LIST_FEATURE, TC_SAVED_LIST_DETAIL_FEATURE, TC_SAVED_LIST_CREATE_FEATURE } from '../../root';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TC_SAVED_LIST_FEATURE, reducerToken),
    StoreModule.forFeature(TC_SAVED_LIST_DETAIL_FEATURE, reducerTokenDetail),
    StoreModule.forFeature(TC_SAVED_LIST_CREATE_FEATURE, reducerTokenCreate),
    EffectsModule.forFeature(effects),
  ],
  providers: [reducerProvider, reducerProviderDetail, reducerProviderCreate],
})
export class TcSavedListStoreModule { }

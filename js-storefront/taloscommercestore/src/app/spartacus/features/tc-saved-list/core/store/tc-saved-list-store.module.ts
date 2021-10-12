import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducerProvider, reducerToken } from './reducers';
import { TC_SAVED_LIST_FEATURE } from '../../root';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TC_SAVED_LIST_FEATURE, reducerToken),
    EffectsModule.forFeature(effects),
  ],
  providers: [reducerProvider],
})
export class TcSavedListStoreModule { }

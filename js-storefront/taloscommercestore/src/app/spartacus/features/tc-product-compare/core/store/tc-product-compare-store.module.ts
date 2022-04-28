import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducerProvider, reducerToken } from './reducers';
import { TC_PRODUCT_COMPARE_FEATURE } from '../../root';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TC_PRODUCT_COMPARE_FEATURE, reducerToken),
  ],
  providers: [reducerProvider],
})
export class TcProductCompareStoreModule {}

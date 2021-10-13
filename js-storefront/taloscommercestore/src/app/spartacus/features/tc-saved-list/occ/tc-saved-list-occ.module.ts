import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { OccTcSavedListAdapter } from './adapters';
import { tcOccSavedListConfig } from './config';
import {
  TcSavedListNormalizer,
  TcSavedListSerializer,
  TcSavedListDetailNormalizer,
  TcSavedListDetailSerializer,
} from './converters';
import {
  SAVED_LIST_SERIALIZER,
  SAVED_LIST_NORMALIZER,
  SAVED_LIST_DETAIL_NORMALIZER,
  SAVED_LIST_DETAIL_SERIALIZER,
  TcSavedListAdapter,
} from '../core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(tcOccSavedListConfig),
    { provide: TcSavedListAdapter, useClass: OccTcSavedListAdapter },
    { provide: SAVED_LIST_NORMALIZER, useExisting: TcSavedListNormalizer, multi: true },
    { provide: SAVED_LIST_SERIALIZER, useExisting: TcSavedListSerializer, multi: true },
    { provide: SAVED_LIST_DETAIL_NORMALIZER, useExisting: TcSavedListDetailNormalizer, multi: true },
    { provide: SAVED_LIST_DETAIL_SERIALIZER, useExisting: TcSavedListDetailSerializer, multi: true },
  ],
})
export class TcSavedListOccModule {}

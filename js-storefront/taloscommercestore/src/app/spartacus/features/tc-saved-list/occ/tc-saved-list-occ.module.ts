import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { OccTcSavedListAdapter } from './adapters';
import { tcOccSavedListConfig } from './config';
import { TcSavedListNormalizer, TcSavedListSerializer } from './converters';
import { SAVED_LIST_SERIALIZER, TcSavedListAdapter } from '../core';
import { SAVED_LIST_NORMALIZER } from '../core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(tcOccSavedListConfig),
    { provide: TcSavedListAdapter, useClass: OccTcSavedListAdapter },
    { provide: SAVED_LIST_NORMALIZER, useExisting: TcSavedListNormalizer, multi: true },
    { provide: SAVED_LIST_SERIALIZER, useExisting: TcSavedListSerializer, multi: true },
  ]
})
export class TcSavedListOccModule {}

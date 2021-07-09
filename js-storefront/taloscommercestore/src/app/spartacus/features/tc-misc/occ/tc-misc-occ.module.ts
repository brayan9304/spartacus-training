import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { tcOccMiscConfig } from './config';
import { DOCUMENT_TYPE_NORMALIZER, TcMiscAdapter } from '../core';
import { OccTcMiscAdapter } from './adapters';
import { DocumentTypeNormalizer } from './converters';

@NgModule({
  imports: [CommonModule],
  providers: [
    provideDefaultConfig(tcOccMiscConfig),
    { provide: TcMiscAdapter, useClass: OccTcMiscAdapter },
    { provide: DOCUMENT_TYPE_NORMALIZER, useExisting: DocumentTypeNormalizer, multi: true },
  ],
})
export class TcMiscOccModule {}

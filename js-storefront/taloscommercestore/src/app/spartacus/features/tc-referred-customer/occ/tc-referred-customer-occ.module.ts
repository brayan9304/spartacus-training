import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { OccTcReferredCustomerAdapter } from './adapters';
import { tcOccReferredCustomerConfig } from './config';
import { TcReferredCustomerNormalizer, TcReferredCustomerSerializer } from './converters';
import { REFERRED_CUSTOMER_SERIALIZER, TcReferredCustomerAdapter } from '../core';
import { REFERRED_CUSTOMER_NORMALIZER } from '../core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(tcOccReferredCustomerConfig),
    { provide: TcReferredCustomerAdapter, useClass: OccTcReferredCustomerAdapter },
    { provide: REFERRED_CUSTOMER_NORMALIZER, useExisting: TcReferredCustomerNormalizer, multi: true },
    { provide: REFERRED_CUSTOMER_SERIALIZER, useExisting: TcReferredCustomerSerializer, multi: true },
  ],
})
export class TcReferredCustomerOccModule {}

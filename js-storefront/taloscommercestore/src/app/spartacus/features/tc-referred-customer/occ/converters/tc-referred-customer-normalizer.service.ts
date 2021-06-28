import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { OccReferredCustomer } from '../model';
import { ReferredCustomer } from '../../core';

/**
 * Referred customer normalizer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class TcReferredCustomerNormalizer implements Converter<OccReferredCustomer, ReferredCustomer> {
  convert(source: OccReferredCustomer, target?: ReferredCustomer): ReferredCustomer {
    if (target === undefined) {
      target = { ...source } as ReferredCustomer;
    }
    return target;
  }
}

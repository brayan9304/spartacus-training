import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { OccReferredCustomer } from '../model';
import { ReferredCustomer } from '../../core';

/**
 * Referred customer serializer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class TcReferredCustomerSerializer implements Converter<ReferredCustomer, OccReferredCustomer> {
  convert(source: ReferredCustomer, target?: OccReferredCustomer): ReferredCustomer {
    if (target === undefined) {
      target = { ...source } as OccReferredCustomer;
    }
    return target;
  }
}

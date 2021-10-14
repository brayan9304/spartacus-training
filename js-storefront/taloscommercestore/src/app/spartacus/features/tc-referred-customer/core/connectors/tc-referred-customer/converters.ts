import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { ReferredCustomer } from '../../model';

export const REFERRED_CUSTOMER_NORMALIZER = new InjectionToken<Converter<any, ReferredCustomer>>(
  'ReferredCustomerNormalizer'
);

export const REFERRED_CUSTOMER_SERIALIZER = new InjectionToken<Converter<any, ReferredCustomer>>(
  'ReferredCustomerSerializer'
);

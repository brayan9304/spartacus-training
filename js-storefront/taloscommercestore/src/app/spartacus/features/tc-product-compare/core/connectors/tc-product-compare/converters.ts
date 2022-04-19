import { InjectionToken } from '@angular/core';
import { Converter, Product } from '@spartacus/core';

export const PRODUCT_COMPARE_NORMALIZER = new InjectionToken<Converter<any, Product>>(
  'ProductCompareNormalizer'
);

export const PRODUCT_COMPARE_SERIALIZER = new InjectionToken<Converter<any, Product>>(
  'ProductCompareSerializer'
);

import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { SavedList } from '../../model';

export const SAVED_LIST_NORMALIZER = new InjectionToken<Converter<any, SavedList>>(
  'SavedListNormalizer'
);

export const SAVED_LIST_SERIALIZER = new InjectionToken<Converter<any, SavedList>>(
  'SavedListSerializer'
);

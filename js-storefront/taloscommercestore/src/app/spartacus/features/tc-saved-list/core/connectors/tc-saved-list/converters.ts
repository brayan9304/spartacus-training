import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { SavedList, SavedListDetail } from '../../model';

export const SAVED_LIST_NORMALIZER = new InjectionToken<Converter<any, SavedList>>(
  'SavedListNormalizer'
);

export const SAVED_LIST_SERIALIZER = new InjectionToken<Converter<any, SavedList>>(
  'SavedListSerializer'
);

export const SAVED_LIST_DETAIL_NORMALIZER = new InjectionToken<Converter<any, SavedListDetail>>(
  'SavedListDetailNormalizer'
);

export const SAVED_LIST_DETAIL_SERIALIZER = new InjectionToken<Converter<any, SavedListDetail>>(
  'SavedListDetailSerializer'
);

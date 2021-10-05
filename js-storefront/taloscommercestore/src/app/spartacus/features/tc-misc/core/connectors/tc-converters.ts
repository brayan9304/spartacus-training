import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { DocumentIdentityType } from '../model';

export const DOCUMENT_TYPE_NORMALIZER = new InjectionToken<Converter<any, DocumentIdentityType>>(
  'DocumentTypeNormalizer'
);

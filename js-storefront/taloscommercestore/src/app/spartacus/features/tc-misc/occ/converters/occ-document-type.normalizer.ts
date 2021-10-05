import { Injectable } from '@angular/core';
import { Converter, OccConfig } from '@spartacus/core';
import { DocumentIdentityType } from '../../core';
import { OccDocumentType } from '../model/occ-tc-misc.model';

@Injectable({ providedIn: 'root' })
export class DocumentTypeNormalizer implements Converter<OccDocumentType, DocumentIdentityType> {
  constructor(protected config: OccConfig) {}

  convert(source: OccDocumentType, target?: DocumentIdentityType): DocumentIdentityType {
    if (target === undefined) {
      target = {} as DocumentIdentityType;
    }

    target.code = source?.documentTypeCode;

    if (source.documentType) {
      target.name = this.normalize(source.documentType);
    }

    return target;
  }

  protected normalize(name: string): string {
    return name.replace(/<[^>]*>/g, '');
  }
}

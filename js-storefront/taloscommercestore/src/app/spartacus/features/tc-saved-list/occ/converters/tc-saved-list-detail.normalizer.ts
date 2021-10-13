import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { SavedListDetail } from '../../core';
import { OccSavedListDetail } from '../model';

/**
 * Saved List Detail normalizer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class TcSavedListDetailNormalizer implements Converter<OccSavedListDetail, SavedListDetail> {
  convert(source: OccSavedListDetail, target?: SavedListDetail): SavedListDetail {
    if (target === undefined) {
      target = { ...source } as SavedListDetail;
    }
    return target;
  }
}

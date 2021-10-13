import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { OccSavedListDetail } from '../model';
import { SavedListDetail } from '../../core';

/**
 * Referred customer serializer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class TcSavedListDetailSerializer implements Converter<SavedListDetail, OccSavedListDetail> {
  convert(source: SavedListDetail, target?: OccSavedListDetail): SavedListDetail {
    if (target === undefined) {
      target = { ...source } as OccSavedListDetail;
    }
    return target;
  }
}

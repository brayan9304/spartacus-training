import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { OccSavedList } from '../model';
import { SavedList } from '../../core';

/**
 * Referred customer serializer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class TcSavedListSerializer implements Converter<SavedList, OccSavedList> {
  convert(source: SavedList, target?: OccSavedList): SavedList {
    if (target === undefined) {
      target = { ...source } as OccSavedList;
    }
    return target;
  }
}

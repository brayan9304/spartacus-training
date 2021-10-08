import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { SavedList } from '../../core';
import { OccSavedList} from '../model';


/**
 * Saved List normalizer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class TcSavedListNormalizer implements Converter<OccSavedList, SavedList> {
  convert(source: OccSavedList, target?: SavedList): SavedList {
    if (target === undefined) {
      target = { ...source } as SavedList;
    }
    return target;
  }
}

import { Action } from '@ngrx/store';

export const CLEAR_MISC_DATA = '[Misc] Clear Misc Data';

export class ClearMiscData implements Action {
  readonly type = CLEAR_MISC_DATA;
}

import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { MiscState, StateWithMisc } from '../tc-misc-state';
import { TC_MISC_FEATURE } from '../../../root';

export const getMiscState: MemoizedSelector<StateWithMisc, MiscState> = createFeatureSelector<MiscState>(
  TC_MISC_FEATURE
);

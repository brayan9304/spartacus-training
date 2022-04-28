import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { TC_PRODUCT_COMPARE_FEATURE } from '../../../root';
import { ProductCompareState, StateWithProductCompare } from '../tc-product-compare-state';

export const getStateWithProductCompare: MemoizedSelector<StateWithProductCompare, ProductCompareState> =
  createFeatureSelector<ProductCompareState>(TC_PRODUCT_COMPARE_FEATURE);

import { TC_PRODUCT_COMPARE_FEATURE} from '../../root';
import { LoaderState } from '@spartacus/core/src/state/utils/loader';
import { Product } from '@spartacus/core';

export const PRODUCT_COMPARE = '[ProductCompare] Product Compare';

export interface StateWithProductCompare {
  [TC_PRODUCT_COMPARE_FEATURE]: ProductCompareState;
}

export interface ProductCompareState {
  productCompare: LoaderState<Product[]>;
}

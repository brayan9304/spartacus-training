import { Product } from "@spartacus/core";

/**
 *
 * An interface representing a saved list
 */
 export interface SavedList {
  id: string;
  name: string;
  description: string;
}

/**
 *
 * An interface representing a list of saved list
 */
export interface SavedLists {
  customProductLists?: SavedList[];
}

/**
 *
 * An interface representing a detail of saved list
 */
export interface SavedListDetail {
  currentPage:       number;
  products:          Product[];
  totalPageCount:    number;
  totalProductCount: number;
}

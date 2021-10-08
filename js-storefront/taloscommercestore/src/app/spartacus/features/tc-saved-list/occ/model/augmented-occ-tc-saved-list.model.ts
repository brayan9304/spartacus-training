import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    /**
     * Get created custom product lists endpoint
     */
    savedLists?: string | OccEndpoint;

    /**
     * Adds a product to a custom product list
     */
    productAddToList?: string | OccEndpoint;


    /**
     * Creates a new custom product list
     */
    createList?: string | OccEndpoint;

    /**
     * Get Custom List By Name
     */
    savedListByName?: string | OccEndpoint;

    /**
     * Get Products From Custom List
     */
    savedListProductsFromList?: string | OccEndpoint;

    /**
     * Delete custom product list.
     */
    savedListRemove?: string | OccEndpoint;

    /**
     * Delete product from custom product list.
     */
    savedListRemoveProduct?: string | OccEndpoint;
  }
}

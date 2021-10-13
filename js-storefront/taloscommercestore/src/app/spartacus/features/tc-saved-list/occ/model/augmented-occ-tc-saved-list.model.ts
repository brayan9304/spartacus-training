import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    /**
     * Get created custom product lists endpoint
     */
    getSavedLists?: string | OccEndpoint;

    /**
     * Adds a product to a custom product list
     */
    addProductToSavedList?: string | OccEndpoint;


    /**
     * Creates a new custom product list
     */
    createSavedList?: string | OccEndpoint;

    /**
     * Get Custom List By Name
     */
    getSavedListByName?: string | OccEndpoint;

    /**
     * Get Products From Custom List
     */
    getDetailsFromSavedList?: string | OccEndpoint;

    /**
     * Delete custom product list.
     */
    deleteSavedList?: string | OccEndpoint;

    /**
     * Delete product from custom product list.
     */
    deleteProductFromSavedList?: string | OccEndpoint;
  }
}

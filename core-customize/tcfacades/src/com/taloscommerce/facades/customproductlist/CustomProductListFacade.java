package com.taloscommerce.facades.customproductlist;

import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.commercefacades.product.ProductOption;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface CustomProductListFacade {

    /**
     * Get all customProductLists
     * @return List<CustomProductListData>
     */
    List<CustomProductListData> getAllCustomProductLists();

    /**
     * Get all products from a customProductList
     * @param customProductListId custom product list id
     * @param productOptions product options
     * @return CustomProductListData
     */
    CustomProductListData getAllProductsForCustomList(String customProductListId, Collection<ProductOption> productOptions);

    /**
     * Return the product lists for user
     * @param customerId customer id
     * @return List <CustomProductListData>
     */
    List<CustomProductListData> getCustomProductListsForUser(String customerId);

    /**
     * Get customerProductList by ID
     * @param customProductListId custom product list id
     * @return Optional<CustomProductListData>
     */
    CustomProductListData getCustomProductListById(String customProductListId);

    /**
     * Returns the specified list for the customer
     * @param listName list name
     * @param customerId customer id
     * @return Optional<ProductData>
     */
    Optional<CustomProductListData> getCustomProductListForUserWithName(String listName, String customerId);

    /**
     * Creates the product list for the user
     * @param customProductListData custom product list
     * @param customerId customer id
     * @return CustomProductListData
     */
    CustomProductListData createCustomProductListForUser(CustomProductListData customProductListData, String customerId);

    /**
     * Saves the product to specified list of customer
     * @param productCode product code
     * @param customProductListId list id
     */
    CustomProductListData addProductToList(String productCode, String customProductListId);

    /**
     * delete the product list
     * @param customProductListId custom Product List id
     */
    void deleteCustomProductList(String customProductListId);

    /**
     * Remove a product from a list
     * @param productCode product code
     * @param customProductListId custom Product List id
     */
    void removeProductFromList(String productCode, String customProductListId);
}

package com.taloscommerce.facades.customproductlist;

import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;

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
     * @param customProductListId
     * @return List<ProductData>
     */
    List<ProductData> getAllProductsForCustomList(String customProductListId);

    /**
     * Return the product lists for user
     * @param customerId customer id
     * @return List <CustomProductListData>
     */
    List<CustomProductListData> getCustomProductListsForUser(String customerId);

    /**
     * Get customerProductList by ID
     * @param customProductListId
     * @return Optional<CustomProductListData>
     */
    CustomProductListData getCustomProductListById(String customProductListId);

    /**
     * Returns the specified list for the customer
     * @param listName
     * @param customerId
     * @return Optional<ProductData>
     */
    Optional<CustomProductListData> getProductListForUserWithName(String listName, String customerId);

    /**
     * Creates the product list for the user
     * @param productListData
     * @param customerId
     * @return CustomProductListData
     */
    CustomProductListData createProductListForUser(CustomProductListData productListData, String customerId);

    /**
     * Saves the product to specified list of customer
     * @param product
     * @param listCode
     */
    void addProductToList(String product, String[] listCode);

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

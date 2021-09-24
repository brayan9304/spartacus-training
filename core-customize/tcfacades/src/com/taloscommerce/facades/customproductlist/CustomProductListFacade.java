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
     * @param customer
     * @return List <CustomProductListData>
     */
    List<CustomProductListData> getCustomProductListsForUser(CustomerData customer);

    /**
     * Get customerProductList by ID
     * @param customProductListId
     * @return Optional<CustomProductListData>
     */
    CustomProductListData getCustomProductListById(String customProductListId);

    /**
     * Returns the specified list for the customer
     * @param listName
     * @param customer
     * @return Optional<ProductData>
     */
    Optional<CustomProductListData> getProductListForUserWithName(String listName, CustomerData customer);

    /**
     * Creates the product list for the user
     * @param productListData
     * @param customer
     * @return CustomProductListData
     */
    CustomProductListData createProductListForUser(CustomProductListData productListData, CustomerData customer);

    /**
     * Saves the product to specified list of customer
     * @param product
     * @param listCode
     */
    void addProductToList(String product, String[] listCode);
}

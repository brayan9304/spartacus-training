package com.taloscommerce.core.customproductlist;

import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;

import java.util.Collection;
import java.util.Optional;

public interface CustomProductListService {

    /**
     * Get all customProductLists
     * @return Collection<SavedListModel>
     */
    Collection<CustomProductListModel> getAllCustomProductLists();

    /**
     * Get all products from a customProductList
     * @param customProductListId custom product list id
     * @return Collection<ProductModel>
     */
    Collection<ProductModel>  getAllProductsForCustomList(String customProductListId);

    /** Get all product lists for the user.
     * @param customerId customer id
     * @return Collection<CustomProductListModel>
     */
    Collection <CustomProductListModel> getCustomProductListsForUser(String customerId);

    /**
     * Get customerProductList by ID
     * @param customProductListId custom product list id
     * @return Optional<CustomProductListModel>
     */
    CustomProductListModel getCustomProductListById(String customProductListId);

    /**
     * Returns the specified list for the customer
     * @param listName list name
     * @param customerId customer id
     * @return Optional<ProductModel>
     */
    Optional<CustomProductListModel> getCustomProductListForUserWithName(String listName, String customerId);

    /**
     * Creates the product list for the user
     * @param customProductListModel custom product list
     * @param customerId customer id
     * @return CustomProductListModel
     */
    CustomProductListModel createCustomProductListForUser(CustomProductListModel customProductListModel, String customerId);

    /**
     * Saves the product to specified list of customer
     * @param productCode product code
     * @param customProductListId list id
     */
    CustomProductListModel addProductToList(String productCode, String customProductListId);

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

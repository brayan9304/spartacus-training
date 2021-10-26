package com.taloscommerce.core.customproductlist.dao;

import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;

import java.util.Collection;
import java.util.Optional;

public interface CustomProductListDao {

    /**
     * Get all customProductLists
     * @return Collection<SavedListModel>
     */
    Collection<CustomProductListModel> getAllCustomProductLists();

    /**
     * Get all products from a customProductList
     * @param customProductList custom product list
     * @return Collection<ProductModel>
     */
    Collection<ProductModel>  getAllProductsForCustomList(CustomProductListModel customProductList);

    /** Get all product lists for the user.
     * @param customer customer
     * @return Collection<CustomProductListModel>
     */
    Collection <CustomProductListModel> getCustomProductListsForUser(CustomerModel customer);

    /**
     * Get customerProductList by ID
     * @param customProductListId custom product list id
     * @return Optional<CustomProductListModel>
     */
    Optional<CustomProductListModel> getCustomProductListById(String customProductListId);

    /**
     * Returns the specified list for the customer
     * @param listName list name
     * @param customer customer
     * @return Optional<ProductModel>
     */
    Optional<CustomProductListModel> getCustomProductListForUserWithName(String listName, CustomerModel customer);

}

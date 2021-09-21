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
     * @param customProductList
     * @return Collection<ProductModel>
     */
    Collection<ProductModel>  getAllProductsForCustomList(CustomProductListModel customProductList);

    /**
     * Get customerProductList by ID
     * @param customProductListId
     * @return Optional<CustomProductListModel>
     */
    Optional<CustomProductListModel> getCustomProductListById(String customProductListId);
}

package com.taloscommerce.facades.customproductlist;

import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.commercefacades.product.data.ProductData;

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
     * @param customProductListData
     * @return List<ProductData>
     */
    List<ProductData> getAllProductsForCustomList(CustomProductListData customProductListData);

    /**
     * Get customerProductList by ID
     * @param customProductListId
     * @return Optional<CustomProductListData>
     */
    Optional<CustomProductListData> getCustomProductListById(String customProductListId);
}

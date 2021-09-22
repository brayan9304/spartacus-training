package com.taloscommerce.facades.customproductlist;

import com.taloscommerce.facades.customproductlist.data.CustomProductListData;

import java.util.List;

public interface CustomProductListFacade {

    /**
     * Get all customProductLists
     * @return List<CustomProductListData>
     */
    List<CustomProductListData> getAllCustomProductLists();
}

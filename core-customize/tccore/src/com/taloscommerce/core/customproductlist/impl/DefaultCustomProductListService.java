package com.taloscommerce.core.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.customproductlist.dao.CustomProductListDao;
import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;

import java.util.Collection;
import java.util.Optional;

public class DefaultCustomProductListService implements CustomProductListService {

    private CustomProductListDao customProductListDao;

    @Override
    public Collection<CustomProductListModel> getAllCustomProductLists(){
        return getCustomProductListDao().getAllCustomProductLists();
    }

    @Override
    public Collection<ProductModel>  getAllProductsForCustomList(final CustomProductListModel customProductList){
        return  getCustomProductListDao().getAllProductsForCustomList(customProductList);
    }

    @Override
    public Optional<CustomProductListModel> getCustomProductListById(final String customProductListId){
        return getCustomProductListDao().getCustomProductListById(customProductListId);
    }

    public CustomProductListDao getCustomProductListDao() {
        return customProductListDao;
    }

    public void setCustomProductListDao(CustomProductListDao customProductListDao) {
        this.customProductListDao = customProductListDao;
    }
}

package com.taloscommerce.facades.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.model.CustomProductListModel;
import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class DefaultCustomProductListFacade implements CustomProductListFacade {

    private Converter<CustomProductListModel, CustomProductListData> customProductListConverter;
    private CustomProductListService customProductListService;

    @Override
    public List<CustomProductListData> getAllCustomProductLists(){
        final Collection<CustomProductListModel> customProductList = getCustomProductListService().getAllCustomProductLists();

        return customProductList.stream().map(getCustomProductListConverter()::convert).collect(Collectors.toList());
    }

    public Converter<CustomProductListModel, CustomProductListData> getCustomProductListConverter() {
        return customProductListConverter;
    }

    public void setCustomProductListConverter(Converter<CustomProductListModel, CustomProductListData> customProductListConverter) {
        this.customProductListConverter = customProductListConverter;
    }

    public CustomProductListService getCustomProductListService() {
        return customProductListService;
    }

    public void setCustomProductListService(CustomProductListService customProductListService) {
        this.customProductListService = customProductListService;
    }
}

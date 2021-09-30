package com.taloscommerce.facades.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.model.CustomProductListModel;
import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.customer.CustomerService;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import java.util.*;
import java.util.stream.Collectors;

public class DefaultCustomProductListFacade implements CustomProductListFacade {

    private Converter<CustomProductListModel, CustomProductListData> customProductListConverter;
    private Converter<CustomProductListData, CustomProductListModel> customProductListReverseConverter;
    private Converter<ProductModel, ProductData> productConverter;
    private CustomProductListService customProductListService;

    @Override
    public List<CustomProductListData> getAllCustomProductLists() {
        final Collection<CustomProductListModel> customProductList = getCustomProductListService().getAllCustomProductLists();

        return customProductList.stream().map(getCustomProductListConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public List<ProductData> getAllProductsForCustomList(final String customProductListId) {
        final Collection<ProductModel> products = getCustomProductListService().getAllProductsForCustomList(customProductListId);

        return products.stream().map(getProductConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public List<CustomProductListData> getCustomProductListsForUser(final String customerId) {
        final Collection<CustomProductListModel> customProductList = getCustomProductListService().getCustomProductListsForUser(customerId);
        return customProductList.stream().map(getCustomProductListConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public CustomProductListData getCustomProductListById(final String customProductListId) {
        final CustomProductListModel customProductListModel = getCustomProductListService().getCustomProductListById(customProductListId);

        return getCustomProductListConverter().convert(customProductListModel);
    }

    @Override
    public Optional<CustomProductListData> getProductListForUserWithName(final String listName, final String customerId) {
        final Optional<CustomProductListModel> customProductListModel = getCustomProductListService().getProductListForUserWithName(listName,customerId);
        return customProductListModel.map(customProductListData -> getCustomProductListConverter().convert(customProductListData));
    }

    @Override
    public CustomProductListData createProductListForUser(final CustomProductListData productListData, final String customerId) {
        final CustomProductListModel model = getCustomProductListReverseConverter().convert(productListData);
        final CustomProductListModel customProductListModel = getCustomProductListService().createProductListForUser(model, customerId);
        return getCustomProductListConverter().convert(customProductListModel);
    }

    @Override
    public void addProductToList(final String product, final String listName, final String customerId) {
        getCustomProductListService().addProductToList(product, listName, customerId);
    }

    @Override
    public void deleteCustomProductList(final String customProductListId){
        getCustomProductListService().deleteCustomProductList(customProductListId);
    }

    @Override
    public void removeProductFromList(final String productCode, final String customProductListId){
        getCustomProductListService().removeProductFromList(productCode, customProductListId);
    }

    public Converter<CustomProductListModel, CustomProductListData> getCustomProductListConverter() {
        return customProductListConverter;
    }

    public void setCustomProductListConverter(Converter<CustomProductListModel, CustomProductListData> customProductListConverter) {
        this.customProductListConverter = customProductListConverter;
    }

    public Converter<CustomProductListData, CustomProductListModel> getCustomProductListReverseConverter() {
        return customProductListReverseConverter;
    }

    public void setCustomProductListReverseConverter(Converter<CustomProductListData, CustomProductListModel> customProductListReverseConverter) {
        this.customProductListReverseConverter = customProductListReverseConverter;
    }

    public Converter<ProductModel, ProductData> getProductConverter() {
        return productConverter;
    }

    public void setProductConverter(Converter<ProductModel, ProductData> productConverter) {
        this.productConverter = productConverter;
    }

    public CustomProductListService getCustomProductListService() {
        return customProductListService;
    }

    public void setCustomProductListService(CustomProductListService customProductListService) {
        this.customProductListService = customProductListService;
    }
}

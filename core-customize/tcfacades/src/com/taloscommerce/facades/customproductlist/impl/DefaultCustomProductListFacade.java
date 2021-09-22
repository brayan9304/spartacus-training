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

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class DefaultCustomProductListFacade implements CustomProductListFacade {

    private Converter<CustomProductListModel, CustomProductListData> customProductListConverter;
    private Converter<CustomProductListData, CustomProductListModel> customProductListReverseConverter;
    private Converter<ProductModel, ProductData> productConverter;
    private CustomProductListService customProductListService;
    private CustomerService customerService;
    @Override
    public List<CustomProductListData> getAllCustomProductLists(){
        final Collection<CustomProductListModel> customProductList = getCustomProductListService().getAllCustomProductLists();

        return customProductList.stream().map(getCustomProductListConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public List<ProductData> getAllProductsForCustomList(final CustomProductListData customProductListData){
        final CustomProductListModel customProductListModel = getCustomProductListReverseConverter().convert(customProductListData);
        final Collection<ProductModel> products = getCustomProductListService().getAllProductsForCustomList(customProductListModel);

        return products.stream().map(getProductConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public List<CustomProductListData> getCustomProductListsForUser(final CustomerData customer) {
        final String id = customer.getCustomerId();
        final CustomerModel customerModel = getCustomerService().getCustomerByCustomerId(id);
        final Collection<CustomProductListModel> customProductList = getCustomProductListService().getCustomProductListsForUser(customerModel);
        return customProductList.stream().map(getCustomProductListConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public Optional<CustomProductListData> getCustomProductListById(final String customProductListId){
        final Optional<CustomProductListModel> customProductListModel = getCustomProductListService().getCustomProductListById(customProductListId);

        return customProductListModel.map(customProductListData -> getCustomProductListConverter().convert(customProductListData));
    }

    @Override
    public Optional<CustomProductListData> getProductListForUserWithName(final String listName, final CustomerData customer) {
        return Optional.empty();
    }

    @Override
    public CustomProductListData createProductListForUser(final CustomProductListData productListData, final CustomerData customer) {
        return null;
    }

    @Override
    public void saveProductToList(final String product, final CustomerData customer, final String list) {

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

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }
}

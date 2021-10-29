package com.taloscommerce.facades.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.model.CustomProductListModel;
import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.converters.ConfigurablePopulator;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import java.util.*;
import java.util.stream.Collectors;

public class DefaultCustomProductListFacade implements CustomProductListFacade {

    private Converter<CustomProductListModel, CustomProductListData> customProductListConverter;
    private Converter<CustomProductListData, CustomProductListModel> customProductListReverseConverter;
    private Converter<ProductModel, ProductData> productConverter;
    private CustomProductListService customProductListService;
    private ConfigurablePopulator<ProductModel, ProductData, ProductOption> productConfiguredPopulator;

    @Override
    public List<CustomProductListData> getAllCustomProductLists() {
        final Collection<CustomProductListModel> customProductList = getCustomProductListService().getAllCustomProductLists();

        return customProductList.stream().map(getCustomProductListConverter()::convert).collect(Collectors.toList());
    }

    @Override
    public CustomProductListData getAllProductsForCustomList(final String customProductListId, final Collection<ProductOption> productOptions) {
        final Collection<ProductModel> products = getCustomProductListService().getAllProductsForCustomList(customProductListId);
        final CustomProductListData customProductListData = getCustomProductListById(customProductListId);
        final List<ProductData> productDataList = new ArrayList<>();

        if (productOptions != null) {
            for (final  ProductModel product : products){
                ProductData productData = getProductConverter().convert(product);
                getProductConfiguredPopulator().populate(product, productData, productOptions);
                productDataList.add(productData);
            }

        }
        customProductListData.setProducts(productDataList);

        return customProductListData ;
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
    public Optional<CustomProductListData> getCustomProductListForUserWithName(final String listName, final String customerId) {
        final Optional<CustomProductListModel> customProductListModel = getCustomProductListService().getCustomProductListForUserWithName(listName,customerId);
        return customProductListModel.map(customProductListData -> getCustomProductListConverter().convert(customProductListData));
    }

    @Override
    public CustomProductListData createCustomProductListForUser(final CustomProductListData customProductListData, final String customerId) {
        final CustomProductListModel model = getCustomProductListReverseConverter().convert(customProductListData);
        final CustomProductListModel customProductListModel = getCustomProductListService().createCustomProductListForUser(model, customerId);
        return getCustomProductListConverter().convert(customProductListModel);
    }

    @Override
    public CustomProductListData addProductToList(final String productCode, final String customProductListId) {
        final CustomProductListModel model = getCustomProductListService().addProductToList(productCode, customProductListId);
        return getCustomProductListConverter().convert(model);
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

    protected ConfigurablePopulator<ProductModel, ProductData, ProductOption> getProductConfiguredPopulator() {
        return productConfiguredPopulator;
    }

    public void setProductConfiguredPopulator(ConfigurablePopulator<ProductModel, ProductData, ProductOption> productConfiguredPopulator) {
        this.productConfiguredPopulator = productConfiguredPopulator;
    }
}

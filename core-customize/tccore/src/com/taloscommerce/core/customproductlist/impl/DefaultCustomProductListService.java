package com.taloscommerce.core.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.customproductlist.dao.CustomProductListDao;
import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;

import java.util.*;

public class DefaultCustomProductListService implements CustomProductListService {

    private CustomProductListDao customProductListDao;
    private ProductService productService;
    private ModelService modelService;
    private KeyGenerator customProductListIdGenerator;

    @Override
    public Collection<CustomProductListModel> getAllCustomProductLists() {
        return getCustomProductListDao().getAllCustomProductLists();
    }

    @Override
    public Collection<ProductModel> getAllProductsForCustomList(final CustomProductListModel customProductList) {
        return getCustomProductListDao().getAllProductsForCustomList(customProductList);
    }

    @Override
    public Collection<CustomProductListModel> getCustomProductListsForUser(final CustomerModel customer) {
        return getCustomProductListDao().getCustomProductListsForUser(customer);
    }

    @Override
    public Optional<CustomProductListModel> getCustomProductListById(final String customProductListId) {
        return getCustomProductListDao().getCustomProductListById(customProductListId);
    }

    @Override
    public Optional<CustomProductListModel> getProductListForUserWithName(final String listName, final CustomerModel customer) {
        return getCustomProductListDao().getProductListForUserWithName(listName,customer);
    }

    @Override
    public CustomProductListModel createProductListForUser(final CustomProductListModel productListModel, final CustomerModel customer) {
        if (Objects.nonNull(customer)) {
            final Collection<CustomProductListModel> customProductListModels = customer.getCustomProductList();
            if (getProductListForUserWithName(productListModel.getName(), customer).isEmpty()) { //If name doesn't exist, nice, we can create it
                customProductListModels.add(productListModel);
                customer.setCustomProductList(customProductListModels);
                getModelService().save(customer);
            }
        }
        return productListModel;
    }

    @Override
    public void saveProductToList(final String product, final CustomerModel customer, final String[] listCodes) {
        final ProductModel productModel = getProductService().getProductForCode(product);
        for (final String listCode : listCodes) {
            if (getCustomProductListDao().getCustomProductListById(listCode).isPresent() && Objects.nonNull(customer)) {
                final CustomProductListModel productListModel = getCustomProductListDao().getCustomProductListById(listCode).get();
                final Set<ProductModel> productModelSet = new HashSet<>((productListModel.getProduct()));
                productModelSet.add(productModel);
                productListModel.setProduct(productModelSet);
                getModelService().save(productListModel);
            }
        }
    }

    public CustomProductListDao getCustomProductListDao() {
        return customProductListDao;
    }

    public void setCustomProductListDao(CustomProductListDao customProductListDao) {
        this.customProductListDao = customProductListDao;
    }

    public ProductService getProductService() {
        return productService;
    }

    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    public ModelService getModelService() {
        return modelService;
    }

    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }

    public KeyGenerator getCustomProductListIdGenerator() {
        return customProductListIdGenerator;
    }

    public void setCustomProductListIdGenerator(KeyGenerator customProductListIdGenerator) {
        this.customProductListIdGenerator = customProductListIdGenerator;
    }
}

package com.taloscommerce.core.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.customproductlist.dao.CustomProductListDao;
import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
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
    public Collection<ProductModel> getAllProductsForCustomList(final String customProductListId) {
        final CustomProductListModel model = getCustomProductListById(customProductListId);
        return getCustomProductListDao().getAllProductsForCustomList(model);
    }

    @Override
    public Collection<CustomProductListModel> getCustomProductListsForUser(final CustomerModel customer) {
        return getCustomProductListDao().getCustomProductListsForUser(customer);
    }

    @Override
    public CustomProductListModel getCustomProductListById(final String customProductListId) {
        final Optional<CustomProductListModel> model = getCustomProductListDao().getCustomProductListById(customProductListId);

        if (model.isEmpty()) {
            throw new UnknownIdentifierException("CustomProductList with customProductListId '%s' not found!");
        }

        return model.get();
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
    public void addProductToList(final String product, final String[] listCodes) {
        final ProductModel productModel = getProductService().getProductForCode(product);
        for (final String listCode : listCodes) {
            if (getCustomProductListDao().getCustomProductListById(listCode).isPresent()) {
                final CustomProductListModel productListModel = getCustomProductListById(listCode);

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

package com.taloscommerce.core.customproductlist.impl;

import com.taloscommerce.core.customproductlist.CustomProductListService;
import com.taloscommerce.core.customproductlist.dao.CustomProductListDao;
import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.commerceservices.customer.CustomerService;
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
    private CustomerService customerService;
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
    public Collection<CustomProductListModel> getCustomProductListsForUser(final String customerId) {
        final CustomerModel customerModel = getCustomerService().getCustomerByCustomerId(customerId);
        return getCustomProductListDao().getCustomProductListsForUser(customerModel);
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
    public Optional<CustomProductListModel> getProductListForUserWithName(final String listName, final String customerId) {
        final CustomerModel customerModel = getCustomerService().getCustomerByCustomerId(customerId);
        return getCustomProductListDao().getProductListForUserWithName(listName,customerModel);
    }

    @Override
    public CustomProductListModel createProductListForUser(final CustomProductListModel productListModel, final String customerId) {
        final CustomerModel customer = getCustomerService().getCustomerByCustomerId(customerId);
        if (Objects.nonNull(customer)) {
            if (getProductListForUserWithName(productListModel.getName(), customerId).isEmpty()) { //If name doesn't exist, nice, we can create it
                productListModel.setId(getCustomProductListIdGenerator().generate().toString());
                productListModel.setCustomer(customer);
                getModelService().save(productListModel);
            }
        }
        return productListModel;
    }

    @Override
    public CustomProductListModel addProductToList(final String product, final String listName, final String customerId) {
        final ProductModel productModel = getProductService().getProductForCode(product);
        final Optional<CustomProductListModel> model = getProductListForUserWithName(listName, customerId);
        final CustomProductListModel productListModel;

        if (model.isEmpty()) {
            final CustomProductListModel newProductListModel = new CustomProductListModel();
            newProductListModel.setName(listName);
            productListModel = createProductListForUser(newProductListModel, customerId);
        } else {
            productListModel = model.get();
        }

        final Set<ProductModel> productModelSet = new HashSet<>((productListModel.getProduct()));
        productModelSet.add(productModel);
        productListModel.setProduct(productModelSet);
        getModelService().save(productListModel);

        return productListModel;
    }

    @Override
    public void deleteCustomProductList(final String customProductListId) {
        final CustomProductListModel model = getCustomProductListById(customProductListId);
        getModelService().remove(model);
    }

    @Override
    public void removeProductFromList(final String productCode, final String customProductListId) {
        final ProductModel productModel = getProductService().getProductForCode(productCode);
        final CustomProductListModel productListModel = getCustomProductListById(customProductListId);

        if (Objects.nonNull(productListModel)) {
            final Set<ProductModel> productModels = new HashSet<>((productListModel.getProduct()));
            if (productModels.contains(productModel)) {
                productModels.remove(productModel);
                productListModel.setProduct(productModels);
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

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
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

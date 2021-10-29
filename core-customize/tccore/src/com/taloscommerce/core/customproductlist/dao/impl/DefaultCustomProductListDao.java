package com.taloscommerce.core.customproductlist.dao.impl;

import com.taloscommerce.core.customproductlist.dao.CustomProductListDao;
import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.internal.dao.DefaultGenericDao;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

public class DefaultCustomProductListDao extends DefaultGenericDao<CustomProductListModel> implements CustomProductListDao {

    private final String CUSTOM_PRODUCT_LIST_BY_ID = "select {p." + CustomProductListModel.PK + "} from {" + CustomProductListModel._TYPECODE + " as p} " +
            "where {p." + CustomProductListModel.ID + "} = ?id ";

    private final String CUSTOM_PRODUCTS_FOR_CUSTOMER = "SELECT {p." + CustomProductListModel.PK + "} "
            + "FROM {" + CustomProductListModel._TYPECODE + " as p JOIN " + CustomerModel._TYPECODE + " as c ON "
            + " {c." + CustomerModel.PK + "} = {p." + CustomProductListModel.CUSTOMER + "}} "
            + " where {c." + CustomerModel.CUSTOMERID + "} = ?customer";

    private final String CUSTOM_LIST_WITH_NAME_FOR_USER = "SELECT {p." + CustomProductListModel.PK + "} "
            + " FROM {" + CustomProductListModel._TYPECODE + " as p JOIN " + CustomerModel._TYPECODE + " as c ON "
            + " {c." + CustomerModel.PK + " } = { p." + CustomProductListModel.CUSTOMER + "} " //Maybe this last p.customer is not okay. and is instead p.typecode
            + " } where {c." + CustomerModel.CUSTOMERID + "} = ?customer and {p." + CustomProductListModel.NAME + "} = ?withName ";


    private FlexibleSearchService flexibleSearchService;

    public DefaultCustomProductListDao() {
        super(CustomProductListModel._TYPECODE);
    }

    @Override
    public Collection<CustomProductListModel> getAllCustomProductLists() {
        return CollectionUtils.emptyIfNull(super.find());
    }

    @Override
    public Collection<ProductModel> getAllProductsForCustomList(final CustomProductListModel customProductList) {
        return customProductList.getProduct();
    }

    @Override
    public Collection<CustomProductListModel> getCustomProductListsForUser(final CustomerModel customer) {
        if (Objects.isNull(customer)) {
            return List.of();
        }

        FlexibleSearchQuery fsq = new FlexibleSearchQuery(CUSTOM_PRODUCTS_FOR_CUSTOMER);
        fsq.addQueryParameter("customer", customer.getCustomerID());
        SearchResult<CustomProductListModel> result = getFlexibleSearchService().search(fsq);

        if (CollectionUtils.isEmpty(result.getResult())){
            return List.of();
        }
        return result.getResult();

    }

    @Override
    public Optional<CustomProductListModel> getCustomProductListById(final String customProductListId) {
        validateParameterNotNull(customProductListId, "Parameter customProductListId must not be null");

        final FlexibleSearchQuery fsq = new FlexibleSearchQuery(CUSTOM_PRODUCT_LIST_BY_ID);
        fsq.addQueryParameter("id", customProductListId);
        final SearchResult<CustomProductListModel> searchResult = getFlexibleSearchService().search(fsq);

        if (CollectionUtils.isEmpty(searchResult.getResult())) {
            return Optional.empty();
        }

        return Optional.ofNullable(searchResult.getResult().get(0));
    }

    @Override
    public Optional<CustomProductListModel> getCustomProductListForUserWithName(final String listName, final CustomerModel customer) {
        if (Objects.isNull(customer)) {
            return Optional.empty();
        }

        FlexibleSearchQuery fsq = new FlexibleSearchQuery(CUSTOM_LIST_WITH_NAME_FOR_USER);
        fsq.addQueryParameter("customer", customer.getCustomerID());
        fsq.addQueryParameter("withName", listName);
        SearchResult<CustomProductListModel> result = getFlexibleSearchService().search(fsq);

        if (CollectionUtils.isEmpty(result.getResult())) {
            return Optional.empty();
        }

        return Optional.ofNullable(result.getResult().get(0));

    }

    @Override
    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
        this.flexibleSearchService = flexibleSearchService;
    }

    @Override
    public FlexibleSearchService getFlexibleSearchService() {
        return flexibleSearchService;
    }
}

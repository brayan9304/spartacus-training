package com.taloscommerce.core.customproductlist.dao.impl;

import com.taloscommerce.core.customproductlist.dao.CustomProductListDao;
import com.taloscommerce.core.model.CustomProductListModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.servicelayer.internal.dao.DefaultGenericDao;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collection;
import java.util.Optional;

public class DefaultCustomProductListDao extends DefaultGenericDao<CustomProductListModel> implements CustomProductListDao {

    private final String CUSTOM_PRODUCT_LIST_BY_ID = "select {p." + CustomProductListModel.PK + "} from {" + CustomProductListModel._TYPECODE + " as p} " +
            "where {p." + CustomProductListModel.ID + "} = ?id ";


    private FlexibleSearchService flexibleSearchService;

    public DefaultCustomProductListDao() {
        super(CustomProductListModel._TYPECODE);
    }

    @Override
    public Collection<CustomProductListModel> getAllCustomProductLists(){
        return CollectionUtils.emptyIfNull(super.find());
    }

    @Override
    public Collection<ProductModel>  getAllProductsForCustomList(final CustomProductListModel customProductList){
        return customProductList.getProduct();
    }

    @Override
    public Optional<CustomProductListModel> getCustomProductListById(final String customProductListId){

        final FlexibleSearchQuery fsq = new FlexibleSearchQuery(CUSTOM_PRODUCT_LIST_BY_ID);
        fsq.addQueryParameter("id", customProductListId);

        final SearchResult<CustomProductListModel> searchResult = flexibleSearchService.search(fsq);

        if (CollectionUtils.isEmpty(searchResult.getResult())) {
            return Optional.empty();
        }

        return Optional.ofNullable(searchResult.getResult().get(0));
    }

    @Override
    public void setFlexibleSearchService(FlexibleSearchService flexibleSearchService) {
        this.flexibleSearchService = flexibleSearchService;
    }
}

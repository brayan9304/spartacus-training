package com.taloscommerce.core.dao.wishlist.impl;

import com.taloscommerce.core.dao.wishlist.CustomWishListDao;
import de.hybris.platform.servicelayer.internal.dao.DefaultGenericDao;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;

import java.util.List;

public class DefaultCustomWishListDao extends DefaultGenericDao<Wishlist2EntryModel> implements CustomWishListDao {

    private static final String REF_QUERY_WISHLIST2ENTRIES = "select {PK} from {wishlist2entry} where DATEDIFF('dd', {addeddate},  CURRENT_DATE) > 1";

    public DefaultCustomWishListDao() {
        super(Wishlist2EntryModel._TYPECODE);
    }

    @Override
    public List<Wishlist2EntryModel> getAllExpiredWishListEntries() {
        FlexibleSearchQuery fsq = new FlexibleSearchQuery(REF_QUERY_WISHLIST2ENTRIES);
        SearchResult<Wishlist2EntryModel> result = this.getFlexibleSearchService().search(fsq);
        return result.getResult();
    }
}

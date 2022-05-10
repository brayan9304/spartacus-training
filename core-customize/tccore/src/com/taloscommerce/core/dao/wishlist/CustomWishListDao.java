package com.taloscommerce.core.dao.wishlist;

import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;

import java.util.List;

public interface CustomWishListDao {

    List<Wishlist2EntryModel> getAllExpiredWishListEntries();

}

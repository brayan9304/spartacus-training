package com.taloscommerce.core.service.wishlist;

import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;

import java.util.List;

public interface CustomWishListService {

    List<Wishlist2EntryModel> getAllExpiredWishListEntries();
}

package com.taloscommerce.facades.wishlist;

import com.taloscommerce.facades.wishlist.data.CustomWishListEntryData;

import java.util.List;

public interface CustomWishListFacade {

    List<CustomWishListEntryData> getAllExpiredWishListEntries();

}

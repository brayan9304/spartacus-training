package com.taloscommerce.core.service.wishlist.impl;

import com.taloscommerce.core.dao.wishlist.CustomWishListDao;
import com.taloscommerce.core.service.wishlist.CustomWishListService;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;

import java.util.List;

public class CustomDefaultWishListService implements CustomWishListService {

    private CustomWishListDao wishListDao;

    public CustomDefaultWishListService(CustomWishListDao wishListDao) {
        this.wishListDao = wishListDao;
    }

    @Override
    public List<Wishlist2EntryModel> getAllExpiredWishListEntries() {
        return wishListDao.getAllExpiredWishListEntries();
    }
}

package com.taloscommerce.facades.wishlist.impl;

import com.taloscommerce.core.service.wishlist.CustomWishListService;
import com.taloscommerce.facades.wishlist.CustomWishListFacade;
import com.taloscommerce.facades.wishlist.data.CustomWishListEntryData;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;

import java.util.List;

public class CustomDefaultWishListFacade implements CustomWishListFacade {

    private CustomWishListService wishListService;
    private Converter<Wishlist2EntryModel, CustomWishListEntryData> wishlistConverter;

    public CustomDefaultWishListFacade(CustomWishListService wishListService, Converter<Wishlist2EntryModel, CustomWishListEntryData> wishlistConverter) {
        this.wishListService = wishListService;
        this.wishlistConverter = wishlistConverter;
    }

    @Override
    public List<CustomWishListEntryData> getAllExpiredWishListEntries() {
        final List<Wishlist2EntryModel> wishListEntries = wishListService.getAllExpiredWishListEntries();
        return wishlistConverter.convertAll(wishListEntries);
    }
}

package com.taloscommerce.facades.populators;

import com.taloscommerce.facades.wishlist.data.CustomWishListEntryData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;

import java.util.Objects;

public class CustomWishListEntryPopulator implements Populator<Wishlist2EntryModel, CustomWishListEntryData> {
    private Converter<UserModel, CustomerData> customerConverter;
    private Converter<ProductModel, ProductData> productConverter;

    public CustomWishListEntryPopulator(Converter<UserModel, CustomerData> customerConverter, Converter<ProductModel, ProductData> productConverter) {
        this.customerConverter = customerConverter;
        this.productConverter = productConverter;
    }

    @Override
    public void populate(final Wishlist2EntryModel source, final CustomWishListEntryData target) throws ConversionException {
        if ( Objects.nonNull(source.getProduct()) ) target.setProduct( productConverter.convert(source.getProduct()) );
        if ( Objects.nonNull(source.getWishlist().getUser()) ) target.setUser(  customerConverter.convert(source.getWishlist().getUser()) );
        if ( Objects.nonNull(source.getAddedDate()) ) target.setAddedDate( source.getAddedDate() );
        if ( Objects.nonNull(source.getQuantity()) ) target.setQuantity( source.getQuantity() );
    }
}

package com.taloscommerce.core.event;

import com.taloscommerce.core.model.SendOldProductInWishListProcessModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.event.AbstractCommerceUserEvent;
import de.hybris.platform.core.model.product.ProductModel;

import java.util.List;

public class SendOldProductInWishListEvent extends AbstractCommerceUserEvent<BaseSiteModel> {

    private List<ProductModel> oldProducts;

    public SendOldProductInWishListEvent(final SendOldProductInWishListProcessModel processModel){
        super();
        oldProducts = (List<ProductModel>) processModel.getOldProducts();
    }

    public List<ProductModel> getOldProducts() {
        return oldProducts;
    }

    public void setOldProducts(List<ProductModel> oldProducts) {
        this.oldProducts = oldProducts;
    }
}

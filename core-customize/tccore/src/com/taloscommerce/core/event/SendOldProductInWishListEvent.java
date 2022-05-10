package com.taloscommerce.core.event;

import com.taloscommerce.core.model.SendOldProductInWishListProcessModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.event.AbstractCommerceUserEvent;
import de.hybris.platform.core.model.product.ProductModel;

import java.util.List;

public class SendOldProductInWishListEvent extends AbstractCommerceUserEvent<BaseSiteModel> {

    private List<ProductModel> products;

    public SendOldProductInWishListEvent(final SendOldProductInWishListProcessModel processModel){
        super();
        products = (List<ProductModel>) processModel.getOldProducts();
    }

    public List<ProductModel> getProducts() {
        return products;
    }

    public void setProducts(List<ProductModel> products) {
        this.products = products;
    }
}

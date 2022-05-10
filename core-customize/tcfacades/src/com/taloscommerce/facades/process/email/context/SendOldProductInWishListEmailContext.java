package com.taloscommerce.facades.process.email.context;

import com.taloscommerce.core.model.SendOldProductInWishListProcessModel;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.converters.impl.AbstractPopulatingConverter;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import java.util.List;

public class SendOldProductInWishListEmailContext extends AbstractEmailContext<SendOldProductInWishListProcessModel> {

    private Converter<ProductModel, ProductData> productConverter;
    private List<ProductData> oldProducts;

    public SendOldProductInWishListEmailContext(AbstractPopulatingConverter productConverter) {
        this.productConverter = productConverter;
    }

    public void init(final SendOldProductInWishListProcessModel sendOldProductInWishListProcessModel, final EmailPageModel emailPageModel)
    {
        super.init(sendOldProductInWishListProcessModel, emailPageModel);
        this.oldProducts = this.productConverter.convertAll(sendOldProductInWishListProcessModel.getOldProducts());
    }

    @Override
    protected BaseSiteModel getSite(SendOldProductInWishListProcessModel businessProcessModel) {
        return businessProcessModel.getSite();
    }

    @Override
    protected CustomerModel getCustomer(SendOldProductInWishListProcessModel businessProcessModel) {
        return businessProcessModel.getCustomer();
    }

    @Override
    protected LanguageModel getEmailLanguage(SendOldProductInWishListProcessModel businessProcessModel) {
        return businessProcessModel.getLanguage();
    }
}

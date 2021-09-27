package com.taloscommerce.webservices.populator;


import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import javax.servlet.http.HttpServletRequest;
import static com.taloscommerce.core.model.CustomProductListModel.*;

@Component("httpRequestCustomProductListDataPopulator")
@Scope("prototype")
public class HttpRequestCustomProductListDataPopulator extends AbstractHttpRequestDataPopulator implements
        Populator<HttpServletRequest, CustomProductListData>
{

    @Override
    public void populate(HttpServletRequest request, CustomProductListData productListData) throws ConversionException {
        Assert.notNull(request, "Parameter source cannot be null.");
        Assert.notNull(productListData, "Parameter target cannot be null.");

        productListData.setId(updateStringValueFromRequest(request, ID, productListData.getId()));
        productListData.setDescription(updateStringValueFromRequest(request,DESCRIPTION,productListData.getDescription()));
        productListData.setName(updateStringValueFromRequest(request,NAME,productListData.getDescription()));
    }
}


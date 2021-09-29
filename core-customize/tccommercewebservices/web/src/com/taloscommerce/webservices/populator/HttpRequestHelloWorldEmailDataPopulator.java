package com.taloscommerce.webservices.populator;

import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import javax.servlet.http.HttpServletRequest;

import static com.taloscommerce.core.model.process.HelloWorldEmailProcessModel.*;

@Component("httpRequestHelloWorldEmailDataPopulator")
@Scope("prototype")
public class HttpRequestHelloWorldEmailDataPopulator extends AbstractHttpRequestDataPopulator implements
        Populator<HttpServletRequest, HelloWorldEmailData> {

    @Override
    public void populate(HttpServletRequest request, HelloWorldEmailData helloWorldEmailData) throws ConversionException {
        Assert.notNull(request, "Parameter request cannot be null.");
        Assert.notNull(helloWorldEmailData, "Parameter helloWorldEmailData cannot be null.");

        helloWorldEmailData.setToEmail(updateStringValueFromRequest(request, TOEMAIL, helloWorldEmailData.getToEmail()));
        helloWorldEmailData.setSubject(updateStringValueFromRequest(request,SUBJECT,helloWorldEmailData.getSubject()));
        helloWorldEmailData.setEmailMessage(updateStringValueFromRequest(request,EMAILMESSAGE,helloWorldEmailData.getEmailMessage()));
    }
}

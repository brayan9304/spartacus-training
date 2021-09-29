package com.taloscommerce.facades.helloworldemail.impl;

import com.taloscommerce.core.helloworldemail.HelloWorldEmailService;
import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import com.taloscommerce.facades.helloworldemail.HelloWorldEmailFacade;
import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.servicelayer.dto.converter.Converter;

public class DefaultHelloWorldEmailFacade implements HelloWorldEmailFacade {

    private Converter<HelloWorldEmailData, HelloWorldEmailProcessModel> helloWorldEmailReverseConverter;
    private HelloWorldEmailService helloWorldEmailService;
    private CustomerFacade customerFacade;

    @Override
    public void postEmail(final HelloWorldEmailData helloWorldEmailData, final String userId) {
        final HelloWorldEmailProcessModel model = getHelloWorldEmailReverseConverter().convert(helloWorldEmailData);
       getHelloWorldEmailService().postEmail(model, userId);
    }

    public Converter<HelloWorldEmailData, HelloWorldEmailProcessModel> getHelloWorldEmailReverseConverter() {
        return helloWorldEmailReverseConverter;
    }

    public void setHelloWorldEmailReverseConverter(Converter<HelloWorldEmailData, HelloWorldEmailProcessModel> helloWorldEmailReverseConverter) {
        this.helloWorldEmailReverseConverter = helloWorldEmailReverseConverter;
    }

    public HelloWorldEmailService getHelloWorldEmailService() {
        return helloWorldEmailService;
    }

    public void setHelloWorldEmailService(HelloWorldEmailService helloWorldEmailService) {
        this.helloWorldEmailService = helloWorldEmailService;
    }

    public CustomerFacade getCustomerFacade() {
        return customerFacade;
    }

    public void setCustomerFacade(CustomerFacade customerFacade) {
        this.customerFacade = customerFacade;
    }
}
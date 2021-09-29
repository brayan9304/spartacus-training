package com.taloscommerce.facades.helloworldemail.impl;

import com.taloscommerce.core.helloworldemail.HelloWorldEmailService;
import com.taloscommerce.facades.helloworldemail.HelloWorldEmailFacade;
import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;
import de.hybris.platform.commercefacades.customer.CustomerFacade;

public class DefaultHelloWorldEmailFacade implements HelloWorldEmailFacade {
    private HelloWorldEmailService helloWorldEmailService;
    private CustomerFacade customerFacade;

    @Override
    public void postEmail(HelloWorldEmailData helloWorldEmailData) {
        //TODO: Converter here
       //getHelloWorldEmailService().postEmail();
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

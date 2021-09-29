package com.taloscommerce.core.helloworldemail;

import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import de.hybris.platform.commercefacades.user.data.CustomerData;

public interface HelloWorldEmailService {
    void postEmail(HelloWorldEmailProcessModel helloWorldEmailProcessModel, CustomerData user);
}

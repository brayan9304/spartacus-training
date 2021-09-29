package com.taloscommerce.core.event;
import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.commerceservices.event.AbstractCommerceUserEvent;

public class HelloWorldEmailEvent extends AbstractCommerceUserEvent<BaseSiteModel> {

    private HelloWorldEmailProcessModel helloWorldEmailProcessModel;

    public HelloWorldEmailEvent() {
        super();
    }

    public HelloWorldEmailProcessModel getHelloWorldEmailProcessModel() {
        return helloWorldEmailProcessModel;
    }

    public void setHelloWorldEmailProcessModel(HelloWorldEmailProcessModel helloWorldEmailProcessModel) {
        this.helloWorldEmailProcessModel = helloWorldEmailProcessModel;
    }
}
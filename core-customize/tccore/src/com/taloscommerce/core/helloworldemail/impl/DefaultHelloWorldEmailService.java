package com.taloscommerce.core.helloworldemail.impl;

import com.taloscommerce.core.event.HelloWorldEmailEvent;
import com.taloscommerce.core.helloworldemail.HelloWorldEmailService;
import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.customer.CustomerService;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;

import java.util.Objects;

public class DefaultHelloWorldEmailService implements HelloWorldEmailService {
    private CustomerService customerService;
    private BaseStoreService baseStoreService;
    private BaseSiteService baseSiteService;
    private CommonI18NService commonI18NService;
    private ModelService modelService;
    private EventService eventService;

    @Override
    public void postEmail(final HelloWorldEmailProcessModel helloWorldEmailProcessModel, final CustomerData user) {
        final HelloWorldEmailEvent helloWorldEmailEvent = new HelloWorldEmailEvent();
        helloWorldEmailEvent.setHelloWorldEmailProcessModel(helloWorldEmailProcessModel);
        setEmailProperties(helloWorldEmailEvent,user);
        getEventService().publishEvent(helloWorldEmailEvent);

        getModelService().save(helloWorldEmailProcessModel);
    }
    
    protected HelloWorldEmailEvent setEmailProperties(final HelloWorldEmailEvent helloWorldEmailEvent,
                                                         final CustomerData user) {
        if (Objects.nonNull(getBaseSiteService().getAllBaseSites().stream().findFirst().get())) {
            helloWorldEmailEvent.setSite(getBaseSiteService().getAllBaseSites().stream().findFirst().get());
        }
        if (Objects.nonNull(getCustomerService().getCustomerByCustomerId(user.getCustomerId()))) {
            helloWorldEmailEvent.setCustomer(getCustomerService().getCustomerByCustomerId(user.getCustomerId()));
        }
        if (Objects.nonNull(getCommonI18NService().getAllLanguages().stream().findFirst().get())) {
            helloWorldEmailEvent.setLanguage(getCommonI18NService().getAllLanguages().stream().findFirst().get());
        }
        if (Objects.nonNull(getCommonI18NService().getAllCurrencies().get(0))) {
            helloWorldEmailEvent.setCurrency(getCommonI18NService().getAllCurrencies().get(0));
        }
        if (Objects.nonNull(getBaseStoreService().getAllBaseStores().get(0))) {
            helloWorldEmailEvent.setBaseStore(getBaseStoreService().getAllBaseStores().get(0));
        }
        return helloWorldEmailEvent;
    }
    
    public ModelService getModelService() {
        return modelService;
    }

    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }

    public EventService getEventService() {
        return eventService;
    }

    public void setEventService(EventService eventService) {
        this.eventService = eventService;
    }

    public BaseStoreService getBaseStoreService() {
        return baseStoreService;
    }

    public void setBaseStoreService(BaseStoreService baseStoreService) {
        this.baseStoreService = baseStoreService;
    }

    public BaseSiteService getBaseSiteService() {
        return baseSiteService;
    }

    public void setBaseSiteService(BaseSiteService baseSiteService) {
        this.baseSiteService = baseSiteService;
    }

    public CommonI18NService getCommonI18NService() {
        return commonI18NService;
    }

    public void setCommonI18NService(CommonI18NService commonI18NService) {
        this.commonI18NService = commonI18NService;
    }

    public CustomerService getCustomerService() {
        return customerService;
    }

    public void setCustomerService(CustomerService customerService) {
        this.customerService = customerService;
    }

}

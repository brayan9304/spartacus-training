package com.taloscommerce.core.event;

import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;

/**
 * Listener for "hello world email" functionality event.
 */
public class HelloWorldEmailEventListener extends AbstractEventListener<HelloWorldEmailEvent>
{

    private ModelService modelService;
    private BusinessProcessService businessProcessService;


    @Override
    protected void onEvent(final HelloWorldEmailEvent event)
    {
        final HelloWorldEmailProcessModel helloWorldEmailProcessModel = (HelloWorldEmailProcessModel) getBusinessProcessService()
                .createProcess("helloWorldEmail-" + event.getCustomer().getUid() + "-" + System.currentTimeMillis(),
                        "helloWorldEmailProcess");
        helloWorldEmailProcessModel.setSite(event.getSite());
        helloWorldEmailProcessModel.setCustomer(event.getCustomer());
        helloWorldEmailProcessModel.setLanguage(event.getLanguage());
        helloWorldEmailProcessModel.setCurrency(event.getCurrency());
        helloWorldEmailProcessModel.setStore(event.getBaseStore());
        helloWorldEmailProcessModel.setEmailMessage(event.getHelloWorldEmailProcessModel().getEmailMessage());
        helloWorldEmailProcessModel.setToEmail(event.getHelloWorldEmailProcessModel().getToEmail());
        helloWorldEmailProcessModel.setSubject(event.getHelloWorldEmailProcessModel().getSubject());
        getModelService().save(helloWorldEmailProcessModel);
        getBusinessProcessService().startProcess(helloWorldEmailProcessModel);
    }

    protected BusinessProcessService getBusinessProcessService()
    {
        return businessProcessService;
    }


    public void setBusinessProcessService(final BusinessProcessService businessProcessService)
    {
        this.businessProcessService = businessProcessService;
    }

    /**
     * @return the modelService
     */
    protected ModelService getModelService()
    {
        return modelService;
    }

    /**
     * @param modelService
     *           the modelService to set
     */
    public void setModelService(final ModelService modelService)
    {
        this.modelService = modelService;
    }


}

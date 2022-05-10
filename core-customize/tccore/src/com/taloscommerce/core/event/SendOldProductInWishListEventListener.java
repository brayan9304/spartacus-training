package com.taloscommerce.core.event;

import com.taloscommerce.core.model.SendOldProductInWishListProcessModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;


import javax.annotation.Resource;
import java.util.List;

public class SendOldProductInWishListEventListener extends AbstractEventListener<SendOldProductInWishListEvent> {


    private ModelService modelService;

    private BusinessProcessService businessProcessService;


    @Override
    protected void onEvent(final SendOldProductInWishListEvent sendOldProductInWishListEvent) {
        final List<ProductModel> products = sendOldProductInWishListEvent.getProducts();
        final SendOldProductInWishListProcessModel processModel = this.businessProcessService.
                createProcess("sendOldProductInWishListProcess-"  + System.currentTimeMillis(), "sendOldProductInWishListProcess");

        processModel.setOldProducts(products);
        processModel.setSite(sendOldProductInWishListEvent.getSite());
        processModel.setCurrency(sendOldProductInWishListEvent.getCurrency());
        processModel.setCustomer(sendOldProductInWishListEvent.getCustomer());
        processModel.setLanguage(sendOldProductInWishListEvent.getLanguage());
        processModel.setStore(sendOldProductInWishListEvent.getBaseStore());
        this.modelService.save(processModel);
        this.businessProcessService.startProcess(processModel);

    }


    public void setModelService(ModelService modelService) {
        this.modelService = modelService;
    }

    public void setBusinessProcessService(BusinessProcessService businessProcessService) {
        this.businessProcessService = businessProcessService;
    }
}

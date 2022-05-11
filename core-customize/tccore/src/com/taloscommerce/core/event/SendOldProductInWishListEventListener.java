package com.taloscommerce.core.event;

import com.taloscommerce.core.model.SendOldProductInWishListProcessModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.servicelayer.event.impl.AbstractEventListener;
import de.hybris.platform.servicelayer.model.ModelService;


import java.util.List;

public class SendOldProductInWishListEventListener extends AbstractEventListener<SendOldProductInWishListEvent> {


    private ModelService modelService;

    private BusinessProcessService businessProcessService;

    public SendOldProductInWishListEventListener(ModelService modelService, BusinessProcessService businessProcessService){
        this.modelService = modelService;
        this.businessProcessService = businessProcessService;
    }


    @Override
    protected void onEvent(final SendOldProductInWishListEvent sendOldProductInWishListEvent) {
        final List<ProductModel> oldProducts = sendOldProductInWishListEvent.getOldProducts();
        final SendOldProductInWishListProcessModel processModel = this.businessProcessService.
                createProcess("sendOldProductInWishListProcess-"  + System.currentTimeMillis(), "sendOldProductInWishListProcess");

        processModel.setOldProducts(oldProducts);
        processModel.setSite(sendOldProductInWishListEvent.getSite());
        processModel.setCurrency(sendOldProductInWishListEvent.getCurrency());
        processModel.setCustomer(sendOldProductInWishListEvent.getCustomer());
        processModel.setLanguage(sendOldProductInWishListEvent.getLanguage());
        processModel.setStore(sendOldProductInWishListEvent.getBaseStore());
        this.modelService.save(processModel);
        this.businessProcessService.startProcess(processModel);

    }


}

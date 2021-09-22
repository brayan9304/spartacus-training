package com.taloscommerce.facades.populators;

import com.taloscommerce.core.model.CustomProductListModel;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

public class CustomProductListPopulator implements Populator<CustomProductListModel, CustomProductListData> {
    @Override
    public void populate(CustomProductListModel source, CustomProductListData target) throws ConversionException {
        validateParameterNotNull(source, "Parameter source cannot be null.");
        validateParameterNotNull(target, "Parameter target cannot be null.");

        target.setId(source.getId());
        target.setName(source.getName());
        target.setDescription(source.getDescription());

    }
}

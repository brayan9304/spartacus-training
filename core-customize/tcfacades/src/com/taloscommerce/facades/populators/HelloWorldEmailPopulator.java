package com.taloscommerce.facades.populators;

import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

public class HelloWorldEmailPopulator implements Populator<HelloWorldEmailProcessModel, HelloWorldEmailData> {

    @Override
    public void populate(HelloWorldEmailProcessModel source, HelloWorldEmailData target) throws ConversionException {
        validateParameterNotNull(source, "Parameter source cannot be null.");
        validateParameterNotNull(target, "Parameter target cannot be null.");

        target.setToEmail(source.getToEmail());
        target.setSubject(source.getSubject());
        target.setEmailMessage(source.getEmailMessage());

    }
}

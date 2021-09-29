package com.taloscommerce.facades.populators;

import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;

public class HelloWorldEmailReversePopulator implements Populator<HelloWorldEmailData, HelloWorldEmailProcessModel> {
    @Override
    public void populate(HelloWorldEmailData source, HelloWorldEmailProcessModel target) throws ConversionException {
        validateParameterNotNull(source, "Parameter source cannot be null.");
        validateParameterNotNull(target, "Parameter target cannot be null.");

        target.setToEmail(source.getToEmail());
        target.setSubject(source.getSubject());
        target.setEmailMessage(source.getEmailMessage());

    }
}

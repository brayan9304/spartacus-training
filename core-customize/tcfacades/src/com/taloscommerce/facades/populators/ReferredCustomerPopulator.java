package com.taloscommerce.facades.populators;

import com.taloscommerce.core.model.ReferredCustomerModel;
import com.taloscommerce.facades.user.data.ReferredCustomerData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.util.Optional;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;


/**
 * Referred Customer populator, to populate a {@link ReferredCustomerData} from a {@link ReferredCustomerModel}.
 */
public class ReferredCustomerPopulator implements Populator<ReferredCustomerModel, ReferredCustomerData>
{

	@Override
	public void populate(final ReferredCustomerModel source, final ReferredCustomerData target) throws ConversionException
	{
		validateParameterNotNull(source, "Parameter source cannot be null.");
		validateParameterNotNull(target, "Parameter target cannot be null.");

		target.setEmail(source.getEmail());
		Optional.ofNullable(source.getDocumentType()).ifPresent(documentType -> {
			target.setDocumentTypeCode(documentType.getCode());
			target.setDocumentType(documentType.getName());
		});
		target.setDocumentNumber(source.getDocumentNumber());
		target.setFirstName(source.getFirstName());
		target.setLastName(source.getLastName());
	}
}

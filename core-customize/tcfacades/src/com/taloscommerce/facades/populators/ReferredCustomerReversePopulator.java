package com.taloscommerce.facades.populators;

import com.taloscommerce.core.model.ReferredCustomerModel;
import com.taloscommerce.core.user.DocumentTypeService;
import com.taloscommerce.facades.user.data.ReferredCustomerData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;

import java.util.Optional;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;


/**
 * Referred Customer Reverse populator, to populate a {@link ReferredCustomerModel} from a {@link ReferredCustomerData}.
 */
public class ReferredCustomerReversePopulator implements Populator<ReferredCustomerData, ReferredCustomerModel>
{
	private final DocumentTypeService documentTypeService;

	public ReferredCustomerReversePopulator(DocumentTypeService documentTypeService)
	{
		this.documentTypeService = documentTypeService;
	}

	@Override
	public void populate(final ReferredCustomerData source, final ReferredCustomerModel target) throws ConversionException
	{
		validateParameterNotNull(source, "Parameter source cannot be null.");
		validateParameterNotNull(target, "Parameter target cannot be null.");

		target.setEmail(source.getEmail());
		Optional.ofNullable(source.getDocumentTypeCode()).flatMap(documentTypeService::getDocumentTypeForCode)
				.ifPresent(target::setDocumentType);
		target.setDocumentNumber(source.getDocumentNumber());
		target.setFirstName(source.getFirstName());
		target.setLastName(source.getLastName());
	}
}

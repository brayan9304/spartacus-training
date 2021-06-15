package com.taloscommerce.facades.populators;

import com.taloscommerce.core.model.DocumentTypeModel;
import com.taloscommerce.facades.user.data.DocumentTypeData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import org.springframework.util.Assert;


/**
 * Document types Populator
 */
public class DefaultDocumentTypePopulator implements Populator<DocumentTypeModel, DocumentTypeData>
{
	@Override
	public void populate(DocumentTypeModel source, DocumentTypeData target)
			throws ConversionException
	{
		Assert.notNull(source, "Parameter source cannot be null.");
		Assert.notNull(target, "Parameter target cannot be null.");

		target.setDocumentTypeCode(source.getCode());
		target.setDocumentType(source.getName());
	}
}

package com.taloscommerce.facades.user.impl;

import com.taloscommerce.core.user.DocumentTypeService;
import com.taloscommerce.core.model.DocumentTypeModel;
import com.taloscommerce.facades.user.DocumentTypeFacade;
import com.taloscommerce.facades.user.data.DocumentTypeData;
import org.springframework.core.convert.converter.Converter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


/**
 * Default implementation of {@link DocumentTypeFacade}
 */
public class DefaultDocumentTypeFacade implements DocumentTypeFacade
{
	private final Converter<DocumentTypeModel, DocumentTypeData> documentTypeConverter;
	private final DocumentTypeService documentTypeService;

	public DefaultDocumentTypeFacade(Converter<DocumentTypeModel, DocumentTypeData> documentTypeConverter,
			DocumentTypeService documentTypeService)
	{
		this.documentTypeConverter = documentTypeConverter;
		this.documentTypeService = documentTypeService;
	}

	@Override
	public List<DocumentTypeData> getDocumentTypes()
	{
		Collection<DocumentTypeModel> documentTypes = getDocumentTypeService().getDocumentTypes();
		return documentTypes.stream().map(getDocumentTypeConverter()::convert).collect(Collectors.toList());
	}

	protected Converter<DocumentTypeModel, DocumentTypeData> getDocumentTypeConverter()
	{
		return documentTypeConverter;
	}

	protected DocumentTypeService getDocumentTypeService()
	{
		return documentTypeService;
	}
}

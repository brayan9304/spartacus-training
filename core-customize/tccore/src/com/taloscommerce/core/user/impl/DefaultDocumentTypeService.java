package com.taloscommerce.core.user.impl;


import com.taloscommerce.core.model.DocumentTypeModel;
import com.taloscommerce.core.user.DocumentTypeService;
import com.taloscommerce.core.user.daos.DocumentTypeDao;

import java.util.Collection;
import java.util.Optional;


/**
 * Default implementation of the {@link DocumentTypeService}
 */
public class DefaultDocumentTypeService implements DocumentTypeService
{
	private final DocumentTypeDao documentTypeDao;

	public DefaultDocumentTypeService(DocumentTypeDao documentTypeDao)
	{
		this.documentTypeDao = documentTypeDao;
	}

	@Override
	public Optional<DocumentTypeModel> getDocumentTypeForCode(String code)
	{
		return getDocumentTypeDao().findByCode(code);
	}

	@Override
	public Collection<DocumentTypeModel> getDocumentTypes()
	{
		return getDocumentTypeDao().findall();
	}

	public DocumentTypeDao getDocumentTypeDao()
	{
		return documentTypeDao;
	}
}

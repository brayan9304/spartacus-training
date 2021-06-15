package com.taloscommerce.core.user.daos.impl;

import com.taloscommerce.core.model.DocumentTypeModel;
import com.taloscommerce.core.user.daos.DocumentTypeDao;
import de.hybris.platform.servicelayer.internal.dao.DefaultGenericDao;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;


/**
 * Default implementation of the {@link DocumentTypeDao}
 */
public class DefaultDocumentTypeDao extends DefaultGenericDao<DocumentTypeModel> implements DocumentTypeDao
{
	public DefaultDocumentTypeDao()
	{
		super(DocumentTypeModel._TYPECODE);
	}

	@Override
	public Optional<DocumentTypeModel> findByCode(String code)
	{
		return CollectionUtils.emptyIfNull(this.find(Collections.singletonMap(DocumentTypeModel.CODE, code))).stream()
				.findFirst();
	}

	@Override
	public Collection<DocumentTypeModel> findall()
	{
		return  CollectionUtils.emptyIfNull(super.find());
	}
}

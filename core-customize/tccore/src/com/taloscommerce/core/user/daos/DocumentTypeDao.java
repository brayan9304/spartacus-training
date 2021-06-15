package com.taloscommerce.core.user.daos;


import com.taloscommerce.core.model.DocumentTypeModel;

import java.util.Collection;
import java.util.Optional;


/**
 * Document Type (Data Access Object)
 */
public interface DocumentTypeDao
{

	/**
	 * @param code document type code
	 * @return optional of document type
	 */
	Optional<DocumentTypeModel> findByCode(String code);

	/**
	 * @return Collection of document Types
	 */
	Collection<DocumentTypeModel> findall();
}

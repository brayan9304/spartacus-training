package com.taloscommerce.core.user;


import com.taloscommerce.core.model.DocumentTypeModel;

import java.util.Collection;
import java.util.Optional;


/**
 * Document Type Service
 */
public interface DocumentTypeService
{

	/**
	 * @param code document type code
	 * @return optional of document type model
	 */
	Optional<DocumentTypeModel> getDocumentTypeForCode(String code);

	/**
	 *
	 * @return Collection of available store document types
	 */
	Collection<DocumentTypeModel> getDocumentTypes();
}

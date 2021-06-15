package com.taloscommerce.facades.user;

import com.taloscommerce.facades.user.data.DocumentTypeData;

import java.util.List;


/**
 * Business Department Facade.
 */
public interface DocumentTypeFacade
{

	/**
	 * Retrieves all business departments
	 *
	 * @return a list with all business departments
	 */
	List<DocumentTypeData> getDocumentTypes();
}

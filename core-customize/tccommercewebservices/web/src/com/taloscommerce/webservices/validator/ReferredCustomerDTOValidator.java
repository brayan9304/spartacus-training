/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.taloscommerce.webservices.validator;

import com.taloscommerce.webservices.dto.user.ReferredCustomerWsDTO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.Assert;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


/**
 * Implementation of {@link Validator} that validate instances of {@link ReferredCustomerWsDTO}.
 */
public class ReferredCustomerDTOValidator implements Validator
{

	@Override
	public boolean supports(final Class clazz)
	{
		return ReferredCustomerWsDTO.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(final Object target, final Errors errors)
	{
		final ReferredCustomerWsDTO referredCustomer = (ReferredCustomerWsDTO) target;
		Assert.notNull(errors, "Errors object must not be null");

		if (StringUtils.isEmpty(referredCustomer.getEmail()))
		{
			errors.reject("referredCustomer.emailNotSet");
		}

		if (StringUtils.isEmpty(referredCustomer.getDocumentTypeCode()))
		{
			errors.reject("referredCustomer.documentTypeCodeNotSet");
		}

		if (StringUtils.isEmpty(referredCustomer.getDocumentNumber()))
		{
			errors.reject("referredCustomer.documentNumberNotSet");
		}

		if (StringUtils.isEmpty(referredCustomer.getFirstName()))
		{
			errors.reject("referredCustomer.firstNameNotSet");
		}

		if (StringUtils.isEmpty(referredCustomer.getLastName()))
		{
			errors.reject("referredCustomer.lastNameNotSet");
		}
	}

}

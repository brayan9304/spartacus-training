/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.taloscommerce.webservices.v2.controller;

import com.taloscommerce.facades.customer.TCCustomerFacade;
import com.taloscommerce.facades.user.data.ReferredCustomerData;
import com.taloscommerce.facades.user.data.ReferredCustomerDataList;
import com.taloscommerce.webservices.dto.user.ReferredCustomerListWsDto;
import com.taloscommerce.webservices.dto.user.ReferredCustomerWsDTO;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commercewebservicescommons.errors.exceptions.RequestParameterException;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;


@Controller
@RequestMapping(value = "/{baseSiteId}/users/{userId}/referredcustomers")
@CacheControl(directive = CacheControlDirective.PRIVATE)
@Api(tags = "Referred Customer")
public class ReferredCustomerController extends BaseCommerceController
{
	public static final String REFERRED_CUSTOMER_DOES_NOT_EXIST = "Referred customer with given email: '%s' doesn't exist or belong to another user";
	private static final String OBJECT_NAME_REFERRED_CUSTOMER_EMAIL = "email";
	private static final String OBJECT_NAME_REFERRED_CUSTOMER = "referredCustomer";
	private static final Logger LOG = LoggerFactory.getLogger(ReferredCustomerController.class);

	@Resource(name = "customerFacade")
	private TCCustomerFacade tcCustomerFacade;

	@Resource(name = "referredCustomerDTOValidator")
	private Validator referredCustomerDTOValidator;


	@Secured({ "ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP" })
	@GetMapping
	@ResponseBody
	@ApiOperation(nickname = "getReferredCustomers", value = "Get customer's referred customers", notes = "Returns customer's referred customers.")
	@ApiBaseSiteIdAndUserIdParam
	@ApiResponse(code = 200, message = "List of customer's referred customers")
	public ReferredCustomerListWsDto getReferredCustomers(
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		final CustomerData customer = tcCustomerFacade.getCurrentCustomer();
		final var referredCustomerDataList = new ReferredCustomerDataList();
		referredCustomerDataList.setReferredCustomers(tcCustomerFacade.getReferredCustomers(customer.getCustomerId()));
		return getDataMapper().map(referredCustomerDataList, ReferredCustomerListWsDto.class, fields);
	}


	@Secured({ "ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP" })
	@PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	@ResponseStatus(value = HttpStatus.CREATED)
	@ApiOperation(nickname = "createReferredCustomer", value = "Creates a new referred customer.", notes = "Creates a new referred customer.")
	@ApiBaseSiteIdAndUserIdParam
	public ReferredCustomerWsDTO createReferredCustomer(
			@ApiParam(value = "Referred customer object.", required = true) @RequestBody final ReferredCustomerWsDTO referredCustomer,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		validate(referredCustomer, OBJECT_NAME_REFERRED_CUSTOMER, referredCustomerDTOValidator);
		final var referredCustomerData = getDataMapper().map(referredCustomer, ReferredCustomerData.class);
		final CustomerData customer = tcCustomerFacade.getCurrentCustomer();
		tcCustomerFacade.addReferredCustomer(customer.getCustomerId(), referredCustomerData);
		return getDataMapper().map(referredCustomerData, ReferredCustomerWsDTO.class, fields);
	}


	@Secured({ "ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP" })
	@PatchMapping(value = "/{email}", consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	@ApiOperation(nickname = "updateReferredCustomer", value = "Updates the referred customer", notes = "Updates the referred customer. Only attributes provided in the request body will be changed.")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(HttpStatus.OK)
	public void updateReferredCustomer(
			@ApiParam(value = "Referred Customer identifier.", required = true) @PathVariable final String email,
			@ApiParam(value = "Referred Customer object", required = true) @RequestBody final ReferredCustomerWsDTO referredCustomer)
	{
		validate(referredCustomer, OBJECT_NAME_REFERRED_CUSTOMER, referredCustomerDTOValidator);
		final var referredCustomerData = getReferredCustomerData(email);
		getDataMapper().map(referredCustomer, referredCustomerData);
		final CustomerData customer = tcCustomerFacade.getCurrentCustomer();
		tcCustomerFacade.updateReferredCustomer(customer.getCustomerId(), referredCustomerData);
	}

	@Secured({ "ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP" })
	@DeleteMapping(value = "/{email}")
	@ApiOperation(nickname = "removeReferredCustomer", value = "Delete customer's referred customer.", notes = "Removes customer's referred customer.")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(HttpStatus.OK)
	public void removeReferredCustomer(
			@ApiParam(value = "Referred Customer identifier.", required = true) @PathVariable final String email)
	{
		LOG.debug("removeReferredCustomer: email={}", sanitize(email));
		final var referredCustomerData = getReferredCustomerData(email);
		tcCustomerFacade.removeReferredCustomer(referredCustomerData);
	}

	private ReferredCustomerData getReferredCustomerData(final String email)
	{
		return tcCustomerFacade.getReferredCustomerForEmail(email).orElseThrow(() -> {
			throw new RequestParameterException(String.format(REFERRED_CUSTOMER_DOES_NOT_EXIST, sanitize(email)),
					RequestParameterException.INVALID, OBJECT_NAME_REFERRED_CUSTOMER_EMAIL);
		});
	}
}

package com.taloscommerce.facades.customer.impl;

import com.taloscommerce.core.customer.TCCustomerService;
import com.taloscommerce.core.model.ReferredCustomerModel;
import com.taloscommerce.facades.customer.TCCustomerFacade;
import com.taloscommerce.facades.user.data.ReferredCustomerData;
import de.hybris.platform.commercefacades.customer.impl.DefaultCustomerFacade;
import de.hybris.platform.servicelayer.dto.converter.Converter;

import java.util.List;
import java.util.Optional;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNullStandardMessage;


/**
 * Custom implementation of the Customer Facade
 */
public class CustomTCCustomerFacade extends DefaultCustomerFacade implements TCCustomerFacade
{
	private final TCCustomerService customerService;
	private final Converter<ReferredCustomerData, ReferredCustomerModel> referredCustomerReverseConverter;
	private final Converter<ReferredCustomerModel, ReferredCustomerData> referredCustomerConverter;

	public CustomTCCustomerFacade(TCCustomerService customerService,
			Converter<ReferredCustomerData, ReferredCustomerModel> referredCustomerReverseConverter,
			Converter<ReferredCustomerModel, ReferredCustomerData> referredCustomerConverter)
	{
		this.customerService = customerService;
		this.referredCustomerReverseConverter = referredCustomerReverseConverter;
		this.referredCustomerConverter = referredCustomerConverter;
	}

	@Override
	public void addReferredCustomer(String customerId, ReferredCustomerData referredCustomer)
	{
		validateParameterNotNullStandardMessage("referredCustomer", referredCustomer);
		getCustomerService().addReferredCustomer(customerId, getReferredCustomerReverseConverter().convert(referredCustomer));
	}

	@Override
	public void updateReferredCustomer(String customerId, ReferredCustomerData referredCustomer)
	{
		validateParameterNotNullStandardMessage("referredCustomer", referredCustomer);
		getCustomerService()
				.getReferredCustomerForEmail(referredCustomer.getEmail()).ifPresent(referredCustomerModel -> {
			getReferredCustomerReverseConverter().convert(referredCustomer, referredCustomerModel);
			getCustomerService().addReferredCustomer(customerId, referredCustomerModel);
		});
	}

	@Override
	public List<ReferredCustomerData> getReferredCustomers(String customerId)
	{
		return getReferredCustomerConverter().convertAll(getCustomerService().getReferredCustomers(customerId));
	}

	@Override
	public Optional<ReferredCustomerData> getReferredCustomerForEmail(String email)
	{
		return getCustomerService().getReferredCustomerForEmail(email).map(referredCustomerConverter::convert);
	}

	@Override
	public void removeReferredCustomer(ReferredCustomerData referredCustomer)
	{
		validateParameterNotNullStandardMessage("referredCustomer", referredCustomer);
		getCustomerService()
				.getReferredCustomerForEmail(referredCustomer.getEmail())
				.ifPresent(referredCustomerModel -> getCustomerService().removeReferredCustomer(referredCustomerModel));
	}

	public TCCustomerService getCustomerService()
	{
		return customerService;
	}

	public Converter<ReferredCustomerData, ReferredCustomerModel> getReferredCustomerReverseConverter()
	{
		return referredCustomerReverseConverter;
	}

	public Converter<ReferredCustomerModel, ReferredCustomerData> getReferredCustomerConverter()
	{
		return referredCustomerConverter;
	}
}

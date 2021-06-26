package com.taloscommerce.core.customer.impl;

import com.taloscommerce.core.customer.TCCustomerService;
import com.taloscommerce.core.model.ReferredCustomerModel;
import de.hybris.platform.commerceservices.customer.dao.CustomerDao;
import de.hybris.platform.commerceservices.customer.impl.DefaultCustomerService;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.model.ModelService;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


/**
 * Custom implementation of the Customer Service
 */
public class CustomTCCustomerService extends DefaultCustomerService implements TCCustomerService
{
	private final ModelService modelService;

	public CustomTCCustomerService(final CustomerDao customerDao, final String regexp,
			ModelService modelService)
	{
		super(customerDao, regexp);
		this.modelService = modelService;
	}

	@Override
	public void saveReferredCustomer(String customerId, ReferredCustomerModel referredCustomer)
	{
		Optional.ofNullable(getCustomerByCustomerId(customerId)).ifPresent(referredCustomer::setCustomer);
		getModelService().save(referredCustomer);
	}

	@Override
	public List<ReferredCustomerModel> getReferredCustomers(String customerId)
	{
		return Optional.ofNullable(getCustomerByCustomerId(customerId)).map(CustomerModel::getReferredCustomers).orElse(
				Collections.emptyList());
	}

	public ModelService getModelService()
	{
		return modelService;
	}
}

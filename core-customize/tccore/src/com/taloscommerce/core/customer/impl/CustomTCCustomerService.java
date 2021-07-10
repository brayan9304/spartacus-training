package com.taloscommerce.core.customer.impl;

import com.taloscommerce.core.customer.TCCustomerService;
import com.taloscommerce.core.model.ReferredCustomerModel;
import de.hybris.platform.commerceservices.customer.dao.CustomerDao;
import de.hybris.platform.commerceservices.customer.impl.DefaultCustomerService;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


/**
 * Custom implementation of the Customer Service
 */
public class CustomTCCustomerService extends DefaultCustomerService implements TCCustomerService
{
	private final ModelService modelService;
	private final UserService userService;

	public CustomTCCustomerService(final CustomerDao customerDao, final String regexp,
			ModelService modelService, UserService userService)
	{
		super(customerDao, regexp);
		this.modelService = modelService;
		this.userService = userService;
	}

	@Override
	public void addReferredCustomer(String customerId, ReferredCustomerModel referredCustomer)
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

	@Override
	public Optional<ReferredCustomerModel> getReferredCustomerForEmail(String email)
	{
		return CollectionUtils.emptyIfNull(((CustomerModel) getUserService().getCurrentUser()).getReferredCustomers()).stream()
				.filter(referredCustomerModel -> email.equals(referredCustomerModel.getEmail())).findFirst();
	}

	@Override
	public void removeReferredCustomer(ReferredCustomerModel referredCustomer)
	{
		getModelService().remove(referredCustomer);
	}

	public ModelService getModelService()
	{
		return modelService;
	}

	public UserService getUserService()
	{
		return userService;
	}
}

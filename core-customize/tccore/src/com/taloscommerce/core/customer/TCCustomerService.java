package com.taloscommerce.core.customer;

import com.taloscommerce.core.model.ReferredCustomerModel;
import de.hybris.platform.commerceservices.customer.CustomerService;

import java.util.List;


/**
 * Talos Commerce Customer Service
 */
public interface TCCustomerService extends CustomerService
{
	/**
	 * Saves a referral for the given customer
	 *
	 * @param customerId       customer id
	 * @param referredCustomer referred customer
	 */
	void saveReferral(String customerId, ReferredCustomerModel referredCustomer);

	/**
	 * Get all the referred customers for the given customer
	 *
	 * @param customerId customer id
	 * @return list of referred customers
	 */
	List<ReferredCustomerModel> getReferredCustomers(String customerId);
}

package com.taloscommerce.core.customer;

import com.taloscommerce.core.model.ReferredCustomerModel;
import de.hybris.platform.commerceservices.customer.CustomerService;

import java.util.List;
import java.util.Optional;


/**
 * Talos Commerce Customer Service
 */
public interface TCCustomerService extends CustomerService
{
	/**
	 * Adds a referred customer for the given customer
	 *
	 * @param customerId       customer id
	 * @param referredCustomer referred customer
	 */
	void addReferredCustomer(String customerId, ReferredCustomerModel referredCustomer);

	/**
	 * Get all the referred customers for the given customer
	 *
	 * @param customerId customer id
	 * @return list of referred customers
	 */
	List<ReferredCustomerModel> getReferredCustomers(String customerId);

	/**
	 * Gets a referred customer for the given email
	 *
	 * @param email email
	 * @return optional of referred customer
	 */
	Optional<ReferredCustomerModel> getReferredCustomerForEmail(String email);

	/**
	 * Removes a referred customer
	 *
	 * @param referredCustomer referred customer
	 */
	void removeReferredCustomer(ReferredCustomerModel referredCustomer);
}

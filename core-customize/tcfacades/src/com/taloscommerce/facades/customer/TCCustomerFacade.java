package com.taloscommerce.facades.customer;

import com.taloscommerce.facades.user.data.ReferredCustomerData;
import de.hybris.platform.commercefacades.customer.CustomerFacade;

import java.util.List;
import java.util.Optional;


/**
 * Talos Commerce Customer Facade
 */
public interface TCCustomerFacade extends CustomerFacade
{
	/**
	 * Adds a referred customer for the given customer
	 *
	 * @param customerId       customer id
	 * @param referredCustomer referred customer
	 */
	void addReferredCustomer(String customerId, ReferredCustomerData referredCustomer);

	/**
	 * Updates a referred customer for the given customer
	 *
	 * @param customerId       customer id
	 * @param referredCustomer referred customer
	 */
	void updateReferredCustomer(String customerId, ReferredCustomerData referredCustomer);

	/**
	 * Get all the referred customers for the given customer
	 *
	 * @param customerId customer id
	 * @return list of referred customers
	 */
	List<ReferredCustomerData> getReferredCustomers(String customerId);

	/**
	 * Gets a referred customer for the given email
	 *
	 * @param email email
	 * @return optional of referred customer
	 */
	Optional<ReferredCustomerData> getReferredCustomerForEmail(String email);

	/**
	 * Removes a referred customer
	 *
	 * @param referredCustomer referred customer
	 */
	void removeReferredCustomer(ReferredCustomerData referredCustomer);
}

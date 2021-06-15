package com.taloscommerce.facades.customer;

import com.taloscommerce.facades.user.data.ReferredCustomerData;
import de.hybris.platform.commercefacades.customer.CustomerFacade;

import java.util.List;


/**
 * Talos Commerce Customer Facade
 */
public interface TCCustomerFacade extends CustomerFacade
{
	/**
	 * Saves a referral for the given customer
	 *
	 * @param customerId       customer id
	 * @param referredCustomer referred customer
	 */
	void saveReferral(String customerId, ReferredCustomerData referredCustomer);

	/**
	 * Get all the referred customers for the given customer
	 *
	 * @param customerId customer id
	 * @return list of referred customers
	 */
	List<ReferredCustomerData> getReferredCustomers(String customerId);
}

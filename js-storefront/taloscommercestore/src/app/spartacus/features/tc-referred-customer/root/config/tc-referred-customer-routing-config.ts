import { RoutesConfig, RoutingConfig } from '@spartacus/core';

export const defaultReferredCustomerRoutesConfig: RoutesConfig = {
  referredCustomers: { paths: ['my-account/referred-customers'], protected: true },
};

export const tcReferredCustomerRoutingConfig: RoutingConfig = {
  routing: {
    routes: defaultReferredCustomerRoutesConfig,
  },
};

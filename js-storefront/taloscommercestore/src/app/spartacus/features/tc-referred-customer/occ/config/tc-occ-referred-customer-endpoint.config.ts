import { OccConfig } from '@spartacus/core';

export const tcOccReferredCustomerConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        referredCustomers: '/users/${userId}/referredcustomers',
        saveReferredCustomer: '/users/${userId}/saveReferredCustomer',
      },
    },
  },
};

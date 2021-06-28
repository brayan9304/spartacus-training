import { OccConfig } from '@spartacus/core';

export const tcOccReferredCustomerConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        referredCustomers: '/users/${userId}/referredcustomers',
      },
    },
  },
};

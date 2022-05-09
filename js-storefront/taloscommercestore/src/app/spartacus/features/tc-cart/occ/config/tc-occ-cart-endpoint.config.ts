import { OccConfig } from '@spartacus/core';

export const tcOccCartConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        saveForLater: '/users/${userId}/carts/${cartId}/selective-cart/addToWishList/productCodes/${productCodes}',
      },
    },
  },
};

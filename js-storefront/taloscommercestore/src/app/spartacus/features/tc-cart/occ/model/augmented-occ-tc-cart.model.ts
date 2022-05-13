import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    saveForLater?: string | OccEndpoint;
    saveManyForLater?: string | OccEndpoint;
    getSavedForLater?: string | OccEndpoint;
    removeFromWishList?: string | OccEndpoint;
    moveToCart?: string | OccEndpoint;
  }
}

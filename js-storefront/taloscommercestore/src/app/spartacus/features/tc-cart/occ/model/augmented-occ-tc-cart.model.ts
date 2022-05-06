import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    carts?: string | OccEndpoint;

    cart?: string | OccEndpoint;
  }
}

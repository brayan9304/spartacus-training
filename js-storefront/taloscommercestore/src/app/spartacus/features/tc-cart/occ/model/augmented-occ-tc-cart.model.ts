import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    saveForLater?: string | OccEndpoint;
    getSavedForLater?: string | OccEndpoint;
  }
}

import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    /**
     * Document Types used for user's and business' info.
     */
    documentTypes?: string | OccEndpoint;
  }
}

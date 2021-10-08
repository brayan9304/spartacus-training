import { RoutesConfig, RoutingConfig } from '@spartacus/core';

export const defaultSavedListRoutesConfig: RoutesConfig = {
  savedLists: { paths: ['my-account/saved-lists'], protected: true},
};

export const tcSavedListRoutingConfig: RoutingConfig = {
  routing: {
    routes: defaultSavedListRoutesConfig,
  },
};

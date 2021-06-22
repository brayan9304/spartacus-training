import {RoutesConfig, RoutingConfig} from '@spartacus/core';

export const customRoutesConfig: RoutesConfig = {
  referrals: {
    paths: ['my-account/referrals']
  },
};

export const customRoutingConfig: RoutingConfig = {
  routing: {
    routes: customRoutesConfig,
  },
};

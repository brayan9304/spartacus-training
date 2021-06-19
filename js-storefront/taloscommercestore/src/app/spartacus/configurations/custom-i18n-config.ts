import { I18nConfig } from '@spartacus/core';
import { customTranslationChunksConfig } from '../translations';

export const customI18nConfig: I18nConfig = {
  i18n: {
    backend: {
      loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
    },
    chunks: customTranslationChunksConfig,
  },
};

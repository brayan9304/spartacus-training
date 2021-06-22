/*
 * Export Customs CMS Component
 */
import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from '@spartacus/core';

export interface TcSplitViewBannerModel extends CmsComponent {
  title?: string;
  content?: string;
  urlLink?: string;
  media?: CmsBannerComponentMedia | CmsResponsiveBannerComponentMedia;
}

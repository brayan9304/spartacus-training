/*
 * Export Customs CMS Component
 */
import { CmsBannerComponentMedia, CmsComponent, CmsNavigationEntry, CmsNavigationNode, CmsResponsiveBannerComponentMedia } from '@spartacus/core';
import { Media } from '@spartacus/storefront';

export interface TcSplitViewBannerModel extends CmsComponent {
  title?: string;
  content?: string;
  urlLink?: string;
  media?: CmsBannerComponentMedia | CmsResponsiveBannerComponentMedia;
}

export interface CustomNavigationNodeModel {
  uid?: string;
  title?: string;
  children?: Array<CustomNavigationNodeModel>;
  entries?: Array<CmsNavigationEntry>;
  media?: any;
}

export interface TcFooterSocialLinkContainerModel extends CmsComponent {
  links?: TcFooterSocialLinkModel;
}

export interface TcFooterSocialLinkModel extends CmsComponent {
  url?: string;
  text?: string;
  media?: Media;
}

export interface TcCardContainerModel extends CmsComponent {
  items?: TcCardItemModel;
}

export interface TcContainerModel extends CmsComponent {
  containerItems?: TcCustomSimpleItemModel;
}

export interface TcCBCModel extends CmsComponent {
  containerItems?: TcCSIModel;
}

export interface TcCardItemModel extends CmsComponent {
  title?: string;
  media?: Media;
}

export interface TcCustomSimpleItemModel extends CmsComponent {
  title?: string;
  description?: string;
  media?: Media;
}

export interface TcCSIModel extends CmsComponent {
  title?: string;
  description?: string;
  media?: Media;
}
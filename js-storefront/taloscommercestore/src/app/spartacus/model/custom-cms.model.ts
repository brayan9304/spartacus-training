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

export interface TcCustomCardContainerModel extends CmsComponent {
  title?: string;
  id?: string;
  page2items?: TcCardItemModel;
}

export interface TcCardItemModel extends CmsComponent {
  title?: string;
  media?: Media;
}

export interface TcCustomItemModel extends CmsComponent {
  title?: string;
  media?: Media;
  description?: string;
  position?: string;
}

export interface TcPageContainerModel extends CmsComponent{
  description?: string;
  cards?: TcCustomCardContainerModel;
  sidebars?: TcSidebarContainerModel;
}

export interface TcSidebarContainerModel extends CmsComponent{
  title?: string;
  links?: TcSidebarLink;
}

export interface TcSidebarLink extends CmsComponent{
  title?: string;
  level?: string;
  link?: string;
}
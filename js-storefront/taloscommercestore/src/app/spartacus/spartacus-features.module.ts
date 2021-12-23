import { NgModule } from '@angular/core';
import {
  AnonymousConsentsModule,
  AuthModule,
  CartModule,
  CartOccModule,
  CheckoutModule,
  CheckoutOccModule,
  CostCenterOccModule,
  ExternalRoutesModule,
  ProductModule,
  ProductOccModule,
  UserOccTransitionalModule,
  UserTransitionalModule,
} from '@spartacus/core';
import {
  AddressBookModule,
  AnonymousConsentManagementBannerModule,
  AnonymousConsentsDialogModule,
  BannerCarouselModule,
  BannerModule,
  BreadcrumbModule,
  CartComponentModule,
  CartPageEventModule,
  CategoryNavigationModule,
  CheckoutComponentModule,
  CheckoutLoginModule,
  CmsParagraphModule,
  ConsentManagementModule,
  FooterNavigationModule,
  HamburgerMenuModule,
  HomePageEventModule,
  LinkModule,
  LoginRouteModule,
  LogoutModule,
  MyCouponsModule,
  MyInterestsModule,
  NavigationEventModule,
  NavigationModule,
  NotificationPreferenceModule,
  OrderCancellationModule,
  OrderConfirmationModule,
  OrderDetailsModule,
  OrderHistoryModule,
  OrderReturnModule,
  PaymentMethodsModule,
  ProductCarouselModule,
  ProductDetailsPageModule,
  ProductFacetNavigationModule,
  ProductImagesModule,
  ProductIntroModule,
  ProductListingPageModule,
  ProductListModule,
  ProductPageEventModule,
  ProductReferencesModule,
  ProductSummaryModule,
  ProductTabsModule,
  ReplenishmentOrderConfirmationModule,
  ReplenishmentOrderDetailsModule,
  ReplenishmentOrderHistoryModule,
  ReturnRequestDetailModule,
  ReturnRequestListModule,
  SearchBoxModule,
  SiteContextSelectorModule,
  StockNotificationModule,
  TabParagraphContainerModule,
  WishListModule,
} from '@spartacus/storefront';
import { UserFeatureModule } from './features/user/user-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { TcSplitViewBannerModule } from '@tc-shared';
import { TcReferredCustomerFeatureModule } from './features/tc-referred-customer/tc-referred-customer-feature.module';
import { TcSavedListFeatureModule } from './features/tc-saved-list/tc-saved-list-feature.module';
import { TcSavedListModule } from './features/tc-saved-list/tc-saved-list.module';
import { TcProductListModule } from './features/product/components/tc-product-list/tc-product-list.module';
import { TcFooterCustomNavigationModule } from './shared/cms-components/content';
import { TcCustomNavigationComponentModule } from './features/tc-custom-navigation-component/tc-custom-navigation-component.module';
import { TcCutomFooterBottomNavigationModule } from './shared/cms-components/content/tc-custom-footer-bottom';
import { TcFooterSocialLinkContainerModule } from './shared/cms-components/content/tc-footer-social-link-container/tc-footer-social-link-container.module';
import { TcFooterSocialLinkModule } from './shared/cms-components/content/tc-footer-social-link/tc-footer-social-link.module';


@NgModule({
  declarations: [],
  imports: [
    // Auth Core
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    // Basic Cms Components
    HamburgerMenuModule,
    SiteContextSelectorModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    // User Core,
    UserTransitionalModule,
    UserOccTransitionalModule,
    // User UI,
    AddressBookModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    // Anonymous Consents Core,
    AnonymousConsentsModule.forRoot(),
    // Anonymous Consents UI,
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    // Product Core,
    ProductModule.forRoot(),
    ProductOccModule,
    // Product UI,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ProductListModule,
    SearchBoxModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    // Cart Core,
    CartModule.forRoot(),
    CartOccModule,
    // Cart UI,
    CartComponentModule,
    WishListModule,
    // Checkout Core,
    CheckoutModule.forRoot(),
    CheckoutOccModule,
    CostCenterOccModule,
    // Checkout UI,
    CheckoutLoginModule,
    CheckoutComponentModule,
    OrderConfirmationModule,
    // Order,
    OrderHistoryModule,
    OrderDetailsModule,
    OrderCancellationModule,
    OrderReturnModule,
    ReturnRequestListModule,
    ReturnRequestDetailModule,
    ReplenishmentOrderHistoryModule,
    ReplenishmentOrderDetailsModule,
    ReplenishmentOrderConfirmationModule,
    // Page Events,
    NavigationEventModule,
    HomePageEventModule,
    CartPageEventModule,
    ProductPageEventModule,
    // External routes,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    SmartEditFeatureModule,

    // Custom CMS Components
    TcSplitViewBannerModule,
    TcReferredCustomerFeatureModule,
    TcSavedListFeatureModule,
    TcSavedListModule,
    TcProductListModule,
    TcFooterCustomNavigationModule,
    TcCustomNavigationComponentModule,
    TcCutomFooterBottomNavigationModule,
    TcFooterSocialLinkContainerModule,
    TcFooterSocialLinkModule,

  ],
})
export class SpartacusFeaturesModule {}

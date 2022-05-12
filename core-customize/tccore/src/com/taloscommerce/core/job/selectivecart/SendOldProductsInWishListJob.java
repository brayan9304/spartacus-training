package com.taloscommerce.core.job.selectivecart;

import com.taloscommerce.core.event.SendOldProductInWishListEvent;
import com.taloscommerce.core.model.SendOldProductInWishListProcessModel;
import com.taloscommerce.core.service.wishlist.CustomWishListService;
import com.taloscommerce.core.service.wishlist.impl.CustomDefaultWishListService;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.config.impl.DefaultConfigurationService;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.event.impl.DefaultEventService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.i18n.impl.DefaultCommonI18NService;
import de.hybris.platform.servicelayer.internal.model.impl.DefaultModelService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.servicelayer.user.impl.DefaultUserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.site.impl.DefaultBaseSiteService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.store.services.impl.DefaultBaseStoreService;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;
import org.hsqldb.rights.User;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;


public class SendOldProductsInWishListJob extends AbstractJobPerformable<CronJobModel> {
	private CustomWishListService customWishListService;
	private EventService eventService;
	private ModelService modelService;
	private ConfigurationService configurationService;
	private BaseStoreService baseStoreService;
	private BaseSiteService baseSiteService;
	private CommonI18NService commonI18NService;
	private UserService userService;

	public SendOldProductsInWishListJob(CustomWishListService customWishListService, DefaultEventService eventService,
			DefaultModelService modelService, DefaultConfigurationService configurationService,
			DefaultBaseStoreService baseStoreService, DefaultBaseSiteService baseSiteService, DefaultUserService userService,
			DefaultCommonI18NService commonI18NService) {
		this.customWishListService = customWishListService;
		this.eventService = eventService;
		this.modelService = modelService;
		this.configurationService = configurationService;
		this.baseStoreService = baseStoreService;
		this.baseSiteService = baseSiteService;
		this.commonI18NService = commonI18NService;
		this.userService = userService;
	}

	@Override
	public PerformResult perform(CronJobModel cronJobModel) {
		if (customWishListService.getAllExpiredWishListEntries().size() > 0) {
			final BaseStoreModel baseStoreModel = baseStoreService.getCurrentBaseStore() != null ?
					baseStoreService.getCurrentBaseStore() : baseStoreService.getAllBaseStores().get(0);
			final BaseSiteModel baseSiteModel = baseSiteService.getCurrentBaseSite() != null ?
					baseSiteService.getCurrentBaseSite() : (BaseSiteModel) baseSiteService.getAllBaseSites().toArray()[0];
			final SendOldProductInWishListProcessModel processModel = new SendOldProductInWishListProcessModel();
			final SendOldProductInWishListEvent event = new SendOldProductInWishListEvent(processModel);
			event.setBaseStore(baseStoreModel);
			event.setSite(baseSiteModel);
			event.setCurrency(commonI18NService.getCurrentCurrency());
			event.setLanguage(commonI18NService.getCurrentLanguage());
			setData(customWishListService.getAllExpiredWishListEntries());
			this.eventService.publishEvent(event);
		}
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

	private void setData(List<Wishlist2EntryModel> entries) {
		HashMap<UserModel, ArrayList<ProductModel>> userProductsRelation = new HashMap<>();
		List<UserModel> users = this.customWishListService.getAllExpiredWishListEntries()
				.stream().map(e -> e.getWishlist().getUser()).collect(Collectors.toList());
		this.customWishListService.getAllExpiredWishListEntries()
				.forEach(e -> {
					userProductsRelation.put(e.getWishlist().getUser(), new ArrayList<>());
				});
		this.customWishListService.getAllExpiredWishListEntries().forEach(
				e -> userProductsRelation.get(e.getWishlist().getUser()).add(e.getProduct())
		);
	}

	public void setCustomWishListService(CustomWishListService customWishListService) {
		this.customWishListService = customWishListService;
	}

	public void setEventService(EventService eventService) {
		this.eventService = eventService;
	}

	@Override
	public void setModelService(ModelService modelService) {
		this.modelService = modelService;
	}

	public void setConfigurationService(ConfigurationService configurationService) {
		this.configurationService = configurationService;
	}

	public void setBaseStoreService(BaseStoreService baseStoreService) {
		this.baseStoreService = baseStoreService;
	}

	public void setBaseSiteService(BaseSiteService baseSiteService) {
		this.baseSiteService = baseSiteService;
	}

	public void setCommonI18NService(CommonI18NService commonI18NService) {
		this.commonI18NService = commonI18NService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
}


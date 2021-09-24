package com.taloscommerce.storefront.controllers.pages;

import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import com.taloscommerce.storefront.controllers.ControllerConstants;
import com.taloscommerce.storefront.forms.CustomProductListForm;
import com.taloscommerce.storefront.forms.validation.CustomProductListValidator;
import com.taloscommerce.storefront.util.customList.CustomProductListDataUtil;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.pages.AbstractPageController;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.util.GlobalMessages;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.cms2.model.pages.ContentPageModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.ui.Model;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/**/saved-lists")
public class CustomProductListController extends AbstractPageController {
    @Resource(name = "customProductListFacade")
    private CustomProductListFacade customProductListFacade;

    @Resource(name = "customerFacade")
    private CustomerFacade customerFacade;

    @Resource(name = "customProductListValidator")
    private CustomProductListValidator customProductListValidator;

    @Resource(name = "customProductListDataUtil")
    private CustomProductListDataUtil customProductListDataUtil;

    private static final String CUSTOM_PRODUCT_LIST = "customProductList";

    @RequestMapping(method = RequestMethod.GET)
    public String viewCreatedLists(final Model model) throws CMSItemNotFoundException {
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final List<CustomProductListData> lists = customProductListFacade.getCustomProductListsForUser(customer);
        model.addAttribute(lists);
        final ContentPageModel contentPage = getContentPageForLabelOrId(null);
        storeCmsPageInModel(model, contentPage);
        setUpMetaDataForContentPage(model, contentPage);
        return getViewForPage(model);
    }

    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public String createProductList(final Model model) throws CMSItemNotFoundException {
        final ContentPageModel customProductList = getContentPageForLabelOrId(CUSTOM_PRODUCT_LIST);
        model.addAttribute("customProductListForm", new CustomProductListForm());
        storeCmsPageInModel(model, customProductList);
        setUpMetaDataForContentPage(model, customProductList);
        return ControllerConstants.Views.Pages.Product.CustomProductList;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String createProductList(final CustomProductListForm form,
                                    final BindingResult result, final Model model) {
        getCustomProductListValidator().validate(form, result);
        if (result.hasErrors()) {
            GlobalMessages.addErrorMessage(model, "Localize result errors");
            return getViewForPage(model);
        }
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final CustomProductListData createdProductList = customProductListDataUtil.convertToCustomProductListData(form);
        customProductListFacade.createProductListForUser(createdProductList, customer);

        return REDIRECT_PREFIX + CUSTOM_PRODUCT_LIST;
    }

    @RequestMapping(value = "/getCustomList/{listName}", method = RequestMethod.GET)
    public String getCustomListProducts(@PathVariable("listName") final String listName, final Model model) {
        final String customListName = decodeWithScheme(listName, UTF_8);
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final Optional<CustomProductListData> productListData = customProductListFacade.getProductListForUserWithName(customListName, customer);
        productListData.ifPresent(customProductListData -> model.addAttribute("products", customProductListData));
        //Add products from productListData first?
        //Change view
        return ControllerConstants.Views.Pages.Product.CustomProductList;
    }

    //Maybe not necessary url params, but instead a JS function that obtains product and list and add them but the page is still the same.
    @RequestMapping(value = "/addTo/{listCode}/{productCode}", method = RequestMethod.POST)
    public String addProductToList(@PathVariable final String[] listCode, @PathVariable("productCode") final String encodeProduct,
                                   final BindingResult result, final Model model, final CustomProductListForm form) {
        getCustomProductListValidator().validate(form, result);
        if (result.hasErrors()) {
            GlobalMessages.addErrorMessage(model, "Localize error adding Product to List");
            return getViewForPage(model);
        }
        final String[] list = listCode; //decode first?
        final String product = decodeWithScheme(encodeProduct, UTF_8);
        customProductListFacade.addProductToList(product,list);
        return REDIRECT_PREFIX;
    }

    public CustomProductListValidator getCustomProductListValidator() {
        return customProductListValidator;
    }

}

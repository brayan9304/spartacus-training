package com.taloscommerce.storefront.controllers.pages;

import com.taloscommerce.storefront.controllers.ControllerConstants;
import com.taloscommerce.storefront.forms.CustomProductListForm;
import com.taloscommerce.storefront.forms.validation.CustomProductListValidator;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.pages.AbstractPageController;
import de.hybris.platform.acceleratorstorefrontcommons.controllers.util.GlobalMessages;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.cms2.model.pages.ContentPageModel;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.ui.Model;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;

@Controller
@RequestMapping(value = "/**/saved-lists")
public class CustomProductListController extends AbstractPageController {
    //@Resource(name= "customProductListFacade")
    //private CustomProductListFacade customProductListFacade;

    @Resource(name = "customerFacade")
    private CustomerFacade customerFacade;

    @Resource(name = "customProductListValidator")
    private CustomProductListValidator customProductListValidator;

    private static final String CUSTOM_PRODUCT_LIST = "customProductList";

    @RequestMapping(method = RequestMethod.GET)
    public String viewCreatedLists(final Model model) throws CMSItemNotFoundException
    {
        //final CustomProductListData lists = customProductListFacade.getCustomProductListsForUser();
        //model.addAttribute(lists);
        final ContentPageModel contentPage = getContentPageForLabelOrId(null);
        storeCmsPageInModel(model, contentPage);
        setUpMetaDataForContentPage(model, contentPage);
        return getViewForPage(model);
    }
    @RequestMapping(value = "/create",method = RequestMethod.GET)
    public String createProductList(final Model model) throws CMSItemNotFoundException {
        //Is this final OK?
        final ContentPageModel customProductList = getContentPageForLabelOrId(CUSTOM_PRODUCT_LIST);
        model.addAttribute("customProductListForm", new CustomProductListForm());
        storeCmsPageInModel(model, customProductList);
        setUpMetaDataForContentPage(model, customProductList);
        return ControllerConstants.Views.Pages.Product.CustomProductList;
    }
    @RequestMapping(value= "/create", method = RequestMethod.POST)
    public String createProductList(final CustomProductListForm form,
                                   final BindingResult result, final Model model) {
        getCustomProductListValidator().validate(form,result);
        if (result.hasErrors()) {
            GlobalMessages.addErrorMessage(model, "Localize result errors");
            return getViewForPage(model);
        }
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final String listName = form.getName();
        //        final CustomProductListData customProductListData =  customProductListFacade.
        //        createProductListForUserByName(listName,customer);

        //Here create data util to convert form into a data
        //final CustomProductListData customProductListData = trainingEmailDataUtil.convertToTrainingEmailData(customTrainingForm);
        // customProductListFacade.createProductList(customProductListData);
        return REDIRECT_PREFIX + CUSTOM_PRODUCT_LIST; //This redirect is better to redirect into
        // the view all custom lists intead of the form to create
    }

    @RequestMapping(value = "/getCustomList/{listName}", method = RequestMethod.GET)
    public String getCustomListProducts(@PathVariable("listName") final String listName, final Model model,
                                final BindingResult result) {
        final String customListName = decodeWithScheme(listName, UTF_8);
        final CustomerData customer = customerFacade.getCurrentCustomer();
        //final CustomProductListData customProductListData =  customProductListFacade.getProductListForUserByName(listName,customer);
        //model.addAttribute("products", customProductListData);
        //getCustomList and the get for getting the page would be the same? (The JSP I mean)
        return ControllerConstants.Views.Pages.Product.CustomProductList;
    }


    //This request mapping probably won't work like that. How to pass the productId and ListName by url?
    @RequestMapping(value = "/addTo/{listName}/{productCode}", method = RequestMethod.POST)
    public String addProductToList( @PathVariable final String listName, @PathVariable("productCode") final String encodeProduct,
                                   final BindingResult result, final Model model, final CustomProductListForm form) {

        final String product = decodeWithScheme(encodeProduct, UTF_8);
        final String list = decodeWithScheme(listName, UTF_8);
        final CustomerData customer = customerFacade.getCurrentCustomer();
        //getCustomProductListValidator().validate(customProductListForm, bindingResult);

        if (result.hasErrors()) {
            storeContentPageTitleInModel(model, getPageTitleResolver().resolveProductPageTitle(product));
            GlobalMessages.addErrorMessage(model, "Localize error adding Product to List");
            return getViewForPage(model);
        }

        //final CustomProductListData customProductListData = recommendationDataUtil.convertToRecommendationData(form);
        //final CustomProductListData newRecommendation = recommendationFacade.postRecommendation(product, recommendationData);

        //model.addAttribute(CustomProductListData);
        //I think this redirect is not necessary, this call is more like a js function to add the product where it should be
        return REDIRECT_PREFIX;
    }

    public CustomProductListValidator getCustomProductListValidator() {
        return customProductListValidator;
    }

}

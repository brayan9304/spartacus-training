package com.taloscommerce.webservices.v2.controller;

import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import com.taloscommerce.webservices.dto.productList.CustomProductListDataList;
import com.taloscommerce.webservices.dto.productList.CustomProductListListWsDTO;
import com.taloscommerce.webservices.dto.productList.CustomProductListWsDTO;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.webservicescommons.errors.exceptions.WebserviceValidationException;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Controller
@Api(tags = "SavedLists")
@RequestMapping(value = "/**/saved-lists")
public class CustomProductListController extends BaseController {

    @Resource(name = "customProductListFacade")
    private CustomProductListFacade customProductListFacade;

    @Resource(name = "customerFacade")
    private CustomerFacade customerFacade;
    @Resource(name = "httpRequestCustomProductListDataPopulator")
    private Populator<HttpServletRequest, CustomProductListData> httpRequestCustomProductListDataPopulator;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(nickname = "getCreatedLists", value = "Get created  custom product lists.", notes = "Returns all of the created lists for the user current")
    @ApiBaseSiteIdParam
    public CustomProductListListWsDTO getCreatedLists(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws CMSItemNotFoundException {
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final List<CustomProductListData> lists = customProductListFacade.getCustomProductListsForUser(customer);
        final CustomProductListDataList customProductListDataList = new CustomProductListDataList();
        customProductListDataList.setCustomProductLists(lists);
        return getDataMapper().map(customProductListDataList, CustomProductListListWsDTO.class, fields);    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(hidden = true, value = "Creates a new custom product list", notes = "Creates a new list for current customer.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id of custom product list", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "description", value = "description of the list", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "name", value = "name of the list", required = true, dataType = "String", paramType = "query")})
    @ApiBaseSiteIdParam
    public CustomProductListWsDTO createProductList(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,final HttpServletRequest request) {
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final CustomProductListData productListData = new CustomProductListData();
        httpRequestCustomProductListDataPopulator.populate(request, productListData);
        customProductListFacade.createProductListForUser(productListData, customer);
        return getDataMapper().map(productListData, CustomProductListWsDTO.class, fields);
    }

    @RequestMapping(value = "/getCustomList/{listName}", method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(nickname = "getCustomListByName", value = "Get Custom List By Name.", notes = "Returns a custom product list by name")
    @ApiBaseSiteIdParam
    public CustomProductListWsDTO getCustomListProducts(@PathVariable("listName") final String listName,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final Optional<CustomProductListData> productListData = customProductListFacade.getProductListForUserWithName(listName, customer);
        return getDataMapper().map(productListData, CustomProductListWsDTO.class, fields);
    }

    @RequestMapping(value = "/addTo/{listCode}/{productCode}", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(hidden = true, value = "Adds a product to a custom product list", notes = "Adds a product to list for current user.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "listCode", value = "id of custom product list", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "productCode", value = "description of the list", dataType = "String", paramType = "query")})
    @ApiBaseSiteIdParam
    public CustomProductListWsDTO addProductToList(@PathVariable final String[] listCode, @PathVariable("productCode") final String product,
                                                   @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields, final HttpServletRequest request)
            throws WebserviceValidationException {
        final CustomProductListData productListData = new CustomProductListData();
        httpRequestCustomProductListDataPopulator.populate(request, productListData);
        customProductListFacade.addProductToList(product, listCode);
        return getDataMapper().map(productListData, CustomProductListWsDTO.class, fields);
    }

    @RequestMapping(value = "/remove/{listId}", method = RequestMethod.DELETE)
    @ResponseBody
    @ApiOperation(nickname = "removeList", value = "Delete custom product list.", notes = "Calls a method to delete list according to its name")
    @ApiBaseSiteIdParam
    public void deleteCustomProductList(@ApiParam(value = "List identifier", required = true) @PathVariable final String listId,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        customProductListFacade.deleteCustomProductList(listId);
    }

    @RequestMapping(value = "/removeFrom/{listId}/{productCode}", method = RequestMethod.DELETE)
    @ResponseBody
    @ApiOperation(nickname = "removeFromList", value = "Delete custom product list.", notes = "Calls a method to delete a product from a list using the list id and product id")
    @ApiBaseSiteIdParam
    public void deleteCustomProductList(@ApiParam(value = "List identifier", required = true) @PathVariable final String listId,
                                        @ApiParam(value = "Product identifier", required = true) @PathVariable final String productCode,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        customProductListFacade.removeProductFromList(listId,productCode);
    }

}

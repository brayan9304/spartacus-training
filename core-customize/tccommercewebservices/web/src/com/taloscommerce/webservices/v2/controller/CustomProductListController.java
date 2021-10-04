package com.taloscommerce.webservices.v2.controller;

import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import com.taloscommerce.webservices.dto.productList.CustomProductListDataList;
import com.taloscommerce.webservices.dto.productList.CustomProductListListWsDTO;
import com.taloscommerce.webservices.dto.productList.CustomProductListWsDTO;
import com.taloscommerce.webservices.product.data.ProductDataList;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductListWsDTO;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.webservicescommons.errors.exceptions.WebserviceValidationException;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.annotations.*;
import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Controller
@Api(tags = "Saved Lists")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/saved-lists")
public class CustomProductListController extends BaseController {

    @Resource(name ="customerFacade")
    private CustomerFacade customerFacade;
    @Resource(name = "customProductListFacade")
    private CustomProductListFacade customProductListFacade;

    @Resource(name = "httpRequestCustomProductListDataPopulator")
    private Populator<HttpServletRequest, CustomProductListData> httpRequestCustomProductListDataPopulator;

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @GetMapping
    @ResponseBody
    @ApiOperation(nickname = "getCreatedLists", value = "Get created  custom product lists.", notes = "Returns all of the created lists for the user current")
    @ApiBaseSiteIdAndUserIdParam
    @ApiResponse(code = 200, message = "List of custom products list")
    public CustomProductListListWsDTO getCreatedLists(
            @ApiParam(value = "User identifier.", required = true) @PathVariable final String userId,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final List<CustomProductListData> lists = customProductListFacade.getCustomProductListsForUser(userId);
        final CustomProductListDataList customProductListDataList = new CustomProductListDataList();
        customProductListDataList.setCustomProductLists(lists);
        return getDataMapper().map(customProductListDataList, CustomProductListListWsDTO.class, fields);
    }

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @PostMapping(value = "/create", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(nickname = "createProductList", value = "Creates a new custom product list", notes = "Creates a new list for current customer.")
    @ApiBaseSiteIdAndUserIdParam
    public CustomProductListWsDTO createProductList(
            @ApiParam(value = "CustomProductList object", required = true) @RequestBody final CustomProductListWsDTO customProductList,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final var customProductListData = getDataMapper().map(customProductList, CustomProductListData.class);
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final String userId = customer.getCustomerId();
        customProductListFacade.createProductListForUser(customProductListData, userId);
        return getDataMapper().map(customProductListData, CustomProductListWsDTO.class, fields);
    }

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @GetMapping(value = "/getCustomList/{listName}")
    @ResponseBody
    @ApiOperation(nickname = "getCustomListByName", value = "Get Custom List By Name.", notes = "Returns a custom product list by name")
    @ApiBaseSiteIdAndUserIdParam
    @ApiResponse(code = 200, message = "Custom list with name")
    public CustomProductListWsDTO getCustomProductList(@PathVariable("listName") final String listName,
                                                       @ApiParam(value = "User identifier.", required = true) @PathVariable final String userId,
                                                       @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final Optional<CustomProductListData> customProductListData = customProductListFacade.getProductListForUserWithName(listName, userId);
        return getDataMapper().map(customProductListData, CustomProductListWsDTO.class, fields);
    }

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @GetMapping(value = "/getProductsFromList/{listId}")
    @ResponseBody
    @ApiOperation(nickname = "getProductsFromList", value = "Get Products From Custom List.", notes = "Returns the products from a custom list by id")
    @ApiBaseSiteIdAndUserIdParam
    @ApiResponse(code = 200, message = " CustomList's products")
    public ProductListWsDTO getProductsFromList(@PathVariable("listId") final String listId,
                                                @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final List<ProductData> products = customProductListFacade.getAllProductsForCustomList(listId);
        final ProductDataList productDataList = new ProductDataList();
        productDataList.setProducts(products);
        return getDataMapper().map(productDataList, ProductListWsDTO.class, fields);
    }

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @PostMapping(value = "/addTo/{listName}/{productCode}")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(nickname = "addToProductToList", value = "Adds a product to a custom product list", notes = "Adds a product to list for current user.")
    @ApiBaseSiteIdAndUserIdParam
    public CustomProductListWsDTO addProductToList(@PathVariable final String listName,
                                                   @ApiParam(value = "productCode", required = true) @PathVariable("productCode") final String product,
                                                   @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final String userId = customer.getCustomerId();
        final CustomProductListData customProductListData = customProductListFacade.addProductToList(product, listName, userId);
        return getDataMapper().map(customProductListData, CustomProductListWsDTO.class, fields);
    }

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @DeleteMapping(value = "/remove/{listId}")
    @ResponseBody
    @ApiOperation(nickname = "removeList", value = "Delete custom product list.", notes = "Calls a method to delete list according to its name")
    @ApiBaseSiteIdAndUserIdParam
    @ResponseStatus(HttpStatus.OK)
    public void deleteCustomProductList(@ApiParam(value = "List identifier", required = true) @PathVariable final String listId,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        customProductListFacade.deleteCustomProductList(listId);
    }

    @Secured({"ROLE_CUSTOMERGROUP", "ROLE_TRUSTED_CLIENT", "ROLE_CUSTOMERMANAGERGROUP"})
    @DeleteMapping(value = "/removeFrom/{listId}/{productCode}")
    @ResponseBody
    @ApiOperation(nickname = "removeFromList", value = "Delete product from custom product list.", notes = "Calls a method to delete a product from a list using the list id and product id")
    @ApiBaseSiteIdAndUserIdParam
    @ResponseStatus(HttpStatus.OK)
    public void deleteCustomProductList(@ApiParam(value = "List identifier", required = true) @PathVariable final String listId,
                                        @ApiParam(value = "Product identifier", required = true) @PathVariable final String productCode,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        customProductListFacade.removeProductFromList(productCode, listId);
    }

}

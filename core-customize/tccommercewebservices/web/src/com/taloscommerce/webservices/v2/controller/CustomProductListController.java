package com.taloscommerce.webservices.v2.controller;

import com.taloscommerce.facades.customproductlist.CustomProductListFacade;
import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import com.taloscommerce.webservices.dto.productList.CustomProductListDataList;
import com.taloscommerce.webservices.dto.productList.CustomProductListListWsDTO;
import com.taloscommerce.webservices.dto.productList.CustomProductListWsDTO;
import com.taloscommerce.webservices.product.data.ProductDataList;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductListWsDTO;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.webservicescommons.errors.exceptions.WebserviceValidationException;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
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

    @Resource(name = "customProductListFacade")
    private CustomProductListFacade customProductListFacade;

    @Resource(name = "httpRequestCustomProductListDataPopulator")
    private Populator<HttpServletRequest, CustomProductListData> httpRequestCustomProductListDataPopulator;

    @GetMapping
    @ResponseBody
    @ApiOperation(nickname = "getCreatedLists", value = "Get created  custom product lists.", notes = "Returns all of the created lists for the user current")
    @ApiBaseSiteIdAndUserIdParam
    public CustomProductListListWsDTO getCreatedLists(
            @ApiParam(value = "User identifier.", required = true) @PathVariable final String userId,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)  {
        final List<CustomProductListData> lists = customProductListFacade.getCustomProductListsForUser(userId);
        final CustomProductListDataList customProductListDataList = new CustomProductListDataList();
        customProductListDataList.setCustomProductLists(lists);
        return getDataMapper().map(customProductListDataList, CustomProductListListWsDTO.class, fields);
    }

    @PostMapping(value = "/create")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(value = "Creates a new custom product list", notes = "Creates a new list for current customer.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id of custom product list", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "description", value = "description of the list", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "name", value = "name of the list", required = true, dataType = "String", paramType = "query")})
    @ApiBaseSiteIdAndUserIdParam
    public CustomProductListWsDTO createProductList(
            @ApiParam(value = "User identifier.", required = true) @PathVariable final String userId,
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields, final HttpServletRequest request) {
        final CustomProductListData customProductListData = new CustomProductListData();
        httpRequestCustomProductListDataPopulator.populate(request, customProductListData);
        customProductListFacade.createProductListForUser(customProductListData, userId);
        return getDataMapper().map(customProductListData, CustomProductListWsDTO.class, fields);
    }

    @GetMapping(value = "/getCustomList/{listName}")
    @ResponseBody
    @ApiOperation(nickname = "getCustomListByName", value = "Get Custom List By Name.", notes = "Returns a custom product list by name")
    @ApiBaseSiteIdAndUserIdParam
    public CustomProductListWsDTO getCustomProductList(@PathVariable("listName") final String listName,
                                                        @ApiParam(value = "User identifier.", required = true) @PathVariable final String userId,
                                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final Optional<CustomProductListData> customProductListData = customProductListFacade.getProductListForUserWithName(listName, userId);
        return getDataMapper().map(customProductListData, CustomProductListWsDTO.class, fields);
    }
    @GetMapping(value = "/getProductsFromList/{listId}")
    @ResponseBody
    @ApiOperation(nickname = "getProductsFromList", value = "Get Products From Custom List.", notes = "Returns the products from a custom list by id")
    @ApiBaseSiteIdAndUserIdParam
    public ProductListWsDTO getProductsFromList(@PathVariable("listId") final String listId,
                                                @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        final List<ProductData> products = customProductListFacade.getAllProductsForCustomList(listId);
        final ProductDataList productDataList = new ProductDataList();
        productDataList.setProducts(products);
        return getDataMapper().map(productDataList, ProductListWsDTO.class, fields);
    }

    @PostMapping(value = "/addTo/{listName}/{productCode}")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(value = "Adds a product to a custom product list", notes = "Adds a product to list for current user.")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "listName", value = "id of custom product list", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "productCode", value = "description of the list", dataType = "String", paramType = "query")})
    @ApiBaseSiteIdAndUserIdParam
    public CustomProductListWsDTO addProductToList(@PathVariable final String listName, @PathVariable("productCode") final String product,
                                                   @ApiParam(value = "User identifier.", required = true) @PathVariable final String userId,
                                                   @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields, final HttpServletRequest request)
            throws WebserviceValidationException {
        final CustomProductListData productListData = customProductListFacade.addProductToList(product, listName, userId);
        return getDataMapper().map(productListData, CustomProductListWsDTO.class, fields);
    }

    @DeleteMapping(value = "/remove/{listId}")
    @ResponseBody
    @ApiOperation(nickname = "removeList", value = "Delete custom product list.", notes = "Calls a method to delete list according to its name")
    @ApiBaseSiteIdAndUserIdParam
    public void deleteCustomProductList(@ApiParam(value = "List identifier", required = true) @PathVariable final String listId,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        customProductListFacade.deleteCustomProductList(listId);
    }

    @DeleteMapping(value = "/removeFrom/{listId}/{productCode}")
    @ResponseBody
    @ApiOperation(nickname = "removeFromList", value = "Delete product from custom product list.", notes = "Calls a method to delete a product from a list using the list id and product id")
    @ApiBaseSiteIdAndUserIdParam
    public void deleteCustomProductList(@ApiParam(value = "List identifier", required = true) @PathVariable final String listId,
                                        @ApiParam(value = "Product identifier", required = true) @PathVariable final String productCode,
                                        @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
        customProductListFacade.removeProductFromList(listId, productCode);
    }

}

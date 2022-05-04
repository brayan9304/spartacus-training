package com.taloscommerce.webservices.v2.controller;


import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.selectivecartfacades.impl.DefaultSelectiveCartFacade;
import de.hybris.platform.servicelayer.user.impl.DefaultUserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

import java.util.List;

import static com.taloscommerce.webservices.v2.controller.BaseController.DEFAULT_FIELD_SET;

@Controller
@RequestMapping(value = "/{baseSiteId}/users/{userId}/carts/{cartId}/selective-cart")
@Api(tags = "Selective cart")
public class SelectiveCartController extends BaseCommerceController {

    @Resource(name = "defaultSelectiveCartFacade")
    private DefaultSelectiveCartFacade defaultSelectiveCartFacade;

    @Resource(name = "defaultUserService")
    private DefaultUserService defaultUserService;


    @PostMapping(value = "/addToCart/{productCode}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "addToCartFromWishList", value = "Removes the product of the wishlist and add the product to the cart")
    @ApiBaseSiteIdParam
    public void addToCartFromWishList(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "productCode", required = true) @PathVariable final String productCode)
        throws CommerceCartModificationException
    {

    }

    @PostMapping(value = "/addToWishList/{entryNumber}")
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "addToWishListFromCart", value = "Removes the product of the cart and add the product to the wishlist")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void addToWishListFromCart(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "entryNumber: product position in cart ex(0)", required = true) @PathVariable final Integer entryNumber)
            throws CommerceCartModificationException
    {
        this.defaultSelectiveCartFacade.addToWishlistFromCart(entryNumber);
    }

    @PostMapping(value = "/addToWishList/productCodes/{productCodes}")
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "addToWishListFromCart", value = "Removes various products of the cart and add the products to the wishlist")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void addToWishListFromCart(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "productCodes: list of strings comma separated ex(123,345)", required = true) @PathVariable final List<String> productCodes)
            throws CommerceCartModificationException
    {
        this.defaultSelectiveCartFacade.addToWishlistFromCart(productCodes);
    }

    @DeleteMapping(value = "/deleteProduct/{productCode}")
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "deleteProductFromWishList", value = "Removes the product from the wishlist")
    @ApiBaseSiteIdUserIdAndCartIdParam
    public void deleteProductFromWishList(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "productCode", required = true) @PathVariable final String productCode)
            throws CommerceCartModificationException
    {

    }

    @GetMapping(value = "/getWishList", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "getWishList", value = "get the wishlist of the current cart")
    @ApiBaseSiteIdParam
    public void getWishList(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
            throws CommerceCartModificationException
    {

    }

}

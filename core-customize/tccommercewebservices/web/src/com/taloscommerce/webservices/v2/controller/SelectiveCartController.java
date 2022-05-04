package com.taloscommerce.webservices.v2.controller;


import com.taloscommerce.webservices.dto.wishlist.WishListWsDTO;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.selectivecartfacades.data.Wishlist2Data;
import de.hybris.platform.selectivecartfacades.impl.DefaultSelectiveCartFacade;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
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
public class SelectiveCartController extends BaseController{

    @Resource(name = "defaultSelectiveCartFacade")
    private DefaultSelectiveCartFacade defaultSelectiveCartFacade;


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
    @ApiBaseSiteIdParam
    public void addToWishListFromCart(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "entryNumber", required = true) @PathVariable final String entryNumber)
            throws CommerceCartModificationException
    {

    }

    @PostMapping(value = "/addToWishList/{productCodes}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "addToWishListFromCart", value = "Removes various products of the cart and add the products to the wishlist")
    @ApiBaseSiteIdParam
    @ResponseBody
    public void addToWishListFromCart(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "productCodes", required = true) @PathVariable final List<String> productCodes)
            throws CommerceCartModificationException
    {

    }

    @DeleteMapping(value = "/deleteProduct/{productCode}")
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "deleteProductFromWishList", value = "Removes the product from the wishlist")
    @ApiBaseSiteIdParam
    public void deleteProductFromWishList(
            @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
            @ApiParam(value = "productCode", required = true) @PathVariable final String productCode)
            throws CommerceCartModificationException
    {

    }

    @GetMapping(value = "/getWishList")
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(nickname = "getWishList", value = "get the wishlist for a cart of an specific user")
    @ApiBaseSiteIdUserIdAndCartIdParam

    public WishListWsDTO getWishList(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
            throws CommerceCartModificationException
    {
        final Wishlist2Data wishlist2Data =  defaultSelectiveCartFacade.getWishlistForSelectiveCart();
        return getDataMapper().map(wishlist2Data, WishListWsDTO.class, fields);
    }

}

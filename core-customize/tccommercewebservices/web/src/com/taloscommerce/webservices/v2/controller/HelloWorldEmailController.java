package com.taloscommerce.webservices.v2.controller;

import com.taloscommerce.facades.helloworldemail.HelloWorldEmailFacade;
import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;
import com.taloscommerce.webservices.populator.HttpRequestHelloWorldEmailDataPopulator;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@Api(tags = "HelloWorldEmail")
@RequestMapping(value = "/**/hello-world-email")
public class HelloWorldEmailController extends BaseController{

    @Resource(name = "helloWorldEmailFacade")
    private HelloWorldEmailFacade helloWorldEmailFacade;

    @Resource(name = "customerFacade")
    private CustomerFacade customerFacade;

    @Resource(name = "httpRequestHelloWorldEmailDataPopulator")
    private Populator<HttpServletRequest, HelloWorldEmailData> helloWorldEmailDataPopulator;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    @ApiOperation(hidden = true, value = "Creates a new email", notes = "Creates a new email")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "toEmail", value = "destination mail", required = true, dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "subject", value = "subject of the email", dataType = "String", paramType = "query"),
            @ApiImplicitParam(name = "emailMessage", value = "message of the email", required = true, dataType = "String", paramType = "query")})
    @ApiBaseSiteIdParam
    public void createNewEmail(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields, final HttpServletRequest request){
        final CustomerData customer = customerFacade.getCurrentCustomer();
        final HelloWorldEmailData helloWorldEmailData = new HelloWorldEmailData();
        helloWorldEmailDataPopulator.populate(request, helloWorldEmailData);
        helloWorldEmailFacade.postEmail(helloWorldEmailData, customer.getCustomerId());

    }

}

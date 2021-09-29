package com.taloscommerce.facades.process.email.context;
import com.taloscommerce.core.model.process.HelloWorldEmailProcessModel;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.process.email.context.AbstractEmailContext;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.user.CustomerModel;

import java.util.Objects;

public class HelloWorldEmailContext extends AbstractEmailContext<HelloWorldEmailProcessModel>
{

    @Override
    public void init(final HelloWorldEmailProcessModel helloWorldEmailProcessModel, final EmailPageModel emailPageModel)
    {
        super.init(helloWorldEmailProcessModel, emailPageModel);
        if (Objects.nonNull(getCustomer(helloWorldEmailProcessModel))) {
            put(EMAIL, getCustomerEmailResolutionService().getEmailForCustomer(getCustomer(helloWorldEmailProcessModel)));
        }

        if (Objects.nonNull(helloWorldEmailProcessModel.getToEmail())){
            put("toEmail", helloWorldEmailProcessModel.getToEmail());
        }
        if (Objects.nonNull(helloWorldEmailProcessModel.getSubject())) {
            put("subject", helloWorldEmailProcessModel.getSubject());
        }

        if (Objects.nonNull(helloWorldEmailProcessModel.getEmailMessage())) {
            put("emailMessage", helloWorldEmailProcessModel.getEmailMessage());
        }

    }



    @Override
    protected BaseSiteModel getSite(HelloWorldEmailProcessModel helloWorldEmailProcessModel) {
        return helloWorldEmailProcessModel.getSite();
    }

    @Override
    protected CustomerModel getCustomer(HelloWorldEmailProcessModel helloWorldEmailProcessModel) {
        return helloWorldEmailProcessModel.getCustomer();
    }

    @Override
    protected LanguageModel getEmailLanguage(HelloWorldEmailProcessModel helloWorldEmailProcessModel) {
        return helloWorldEmailProcessModel.getLanguage();
    }

}
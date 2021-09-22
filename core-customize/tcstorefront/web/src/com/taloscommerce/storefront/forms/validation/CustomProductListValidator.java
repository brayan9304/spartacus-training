package com.taloscommerce.storefront.forms.validation;
import com.taloscommerce.storefront.forms.CustomProductListForm;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component("customProductListValidator")
public class CustomProductListValidator implements  Validator{
    @Override
    public boolean supports(Class<?> aClass) {
        return CustomProductListForm.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {
        final CustomProductListForm productListForm = (CustomProductListForm) object;
        final String id = productListForm.getId();
        final String name = productListForm.getName();
        if (StringUtils.isEmpty(id)) {
            errors.rejectValue("id", "Localize empty ID");
        }

        if (StringUtils.isEmpty(name)) {
            errors.rejectValue("name", "localize empty name");
        }
    }
}

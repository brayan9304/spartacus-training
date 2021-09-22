package com.taloscommerce.storefront.util.customList;

import com.taloscommerce.storefront.forms.CustomProductListForm;

import java.util.Objects;

public class CustomProductListDataUtil {
    public CustomProductListData convertToCustomProductListData(final CustomProductListForm customProductListForm) {
        final CustomProductListData customProductListData = new CustomProductListData();
        if (Objects.nonNull(customProductListForm.getId())) {
            CustomProductListData.setToEmail(customProductListForm.getId());
        }
        if (Objects.nonNull(customProductListForm.getName())) {
            CustomProductListData.setSubject(customProductListForm.getName());
        }
        if (Objects.nonNull(customProductListForm.getDescription())) {
            CustomProductListData.setEmailMessage(customProductListForm.getDescription());
        }
        return CustomProductListData;
    }
}

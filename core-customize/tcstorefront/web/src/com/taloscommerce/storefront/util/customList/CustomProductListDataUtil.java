package com.taloscommerce.storefront.util.customList;

import com.taloscommerce.facades.customproductlist.data.CustomProductListData;
import com.taloscommerce.storefront.forms.CustomProductListForm;

import java.util.Objects;

public class CustomProductListDataUtil {
    public CustomProductListData convertToCustomProductListData(final CustomProductListForm customProductListForm) {
        final CustomProductListData customProductListData = new CustomProductListData();
        if (Objects.nonNull(customProductListForm.getId())) {
            customProductListData.setId(customProductListForm.getId());
        }
        if (Objects.nonNull(customProductListForm.getName())) {
            customProductListData.setName(customProductListForm.getName());
        }
        if (Objects.nonNull(customProductListForm.getDescription())) {
            customProductListData.setDescription(customProductListForm.getDescription());
        }
        return customProductListData;
    }
}

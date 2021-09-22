package com.taloscommerce.storefront.forms;
import javax.validation.constraints.NotNull;

public class CustomProductListForm {
    private String id;
    private String name;
    private String description;

    @NotNull(message = "Localize Id Empty")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @NotNull(message = "Localize Name Empty")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

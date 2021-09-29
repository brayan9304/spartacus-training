package com.taloscommerce.facades.helloworldemail;


import com.taloscommerce.facades.helloworldemail.data.HelloWorldEmailData;

public interface HelloWorldEmailFacade {
    void postEmail(HelloWorldEmailData helloWorldEmailProcessModel, String userId);
}

<template>
    <div>
        <h2 id="translation" class="title is-4"><a href="#translation">Translation</a></h2>
        <p>
            This plugin only comes with English messages to keep things small, but it was built with flexible message generation in mind.
            <br>
            The <a href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/en.js" class="link" target="github">English messages file</a> is an example on how you would structure those messages.
            Then you may want to update the validator dictionary, which should happen once in your app startup. still you may update them whenever you want in any point of your app, review the <router-link :to="{ name: 'rules', hash: '#custom-messages' }" class="link">custom messages</router-link> here.
        </p>
        <h2 id="attributes-data-vv-as" class="title is-4"><a href="#attributes-data-vv-as">Attributes (data-vv-as)</a></h2>
        <p>
            Seeing 'first_name' in your error messages can't be very good for your user experience, this plugin offer a couple of solutions:

            You can use the <code>data-vv-as</code> attribute on your field and give it a better name for your users, it would look like this:
            <code-block class="language-html">
                &lt;input v-validate data-vv-rules=&quot;alpha|min:3&quot; data-vv-as=&quot;First Name&quot; name=&quot;first_name&quot; type=&quot;text&quot;&gt;
            </code-block>

            Now when any error message is generated for this input will use the <code>data-vv-as</code> value instead of the actual field name. This is also the same for binding expressions.
            While this is very useful for simple setups and displaying localized names, but it is only ideal for a single-locale page, for multi-localized pages and more advanced usages you might want to check the approach below.
        </p>
        <h2 id="attributes-dictionary" class="title is-4"><a href="#attributes-dictionary">Attributes (Dictionary)</a></h2>
        <p>
            All validators have access to a simple dictionary that is shared between all of them, this dictionary contains localized error messages and attributes, if the validator finds a localized attribute name for that field it will be used instead of the field name.
            Pretty much like <code>data-vv-as</code> but <code>data-vv-as</code> takes priorty if both are found.
        </p>
        <p>
            Here is a little code example on how would you add support for your localized messages and attributes. Note that this is the entry point of your application.
        </p>
        <code-block class="language-javascript">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';
            import messagesAr from './strings/validator/messages/ar.js';
            import attributesAr from './strings/validator/attributes/ar.js';
            import attributesEn from './strings/validator/attributes/en.js';

            // Pass options to make all validators use the arabic language, also merge the english and arabic attributes with the internal dictionary.
            // You can still modify each validator locale indvidually via the 'setLocale' on the validator instance.
            Vue.use(VeeValidate, {
                locale: 'ar',
                dictionary: { // dictionary object
                    en: {  // locale key
                        attributes: attributesEn // English attributes
                    },
                    ar: {   // locale key
                        messages: messagesAr,   // Arabic messages
                        attributes: attributesAr  // Arabic attributes
                    }
                }
            });


            new Vue({
                el: '#app',
                data: {
                    // Some Data ...
                },
                methods {
                    // Cool methods ...
                }
            });
        </code-block>
        <note>
            Both the validator class and the validator instances offer <code class="inline">setLocale</code> method which changes the current locale for <b>All Validators</b> to the specified locale, not providing a locale will switch them to English instead.
        </note>
        <div>
            A working example can be found <router-link class="link" :to="{ name: 'examples', hash: '#locale-example' }">here</router-link>.
        </div>
        <h2 id="localized-files" class="title is-4"><a href="#localized-files">Localized Files</a></h2>
        <p>
            In the <a class="link" href="https://github.com/logaretm/vee-validate/tree/master/dist/locale" target="github"><code class="inline">dist/locale</code></a> directory of this plugin, is a collection of localized files.
            If you can't find your locale, you could help this plugin by contributing a localized version to the <a href="https://github.com/logaretm/vee-validate" class="link" target="github">repo</a>. I will happily accept it.
        </p>
    </div>
</template>

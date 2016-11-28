<template>
    <code-example>
        <div slot="example" class="columns is-rtl is-multiline">
            <button @click="changeLocale" type="button" class="button is-primary">Change Locale To {{ nextLocale }}</button>
            <div class="column is-12">
                <label class="label">البريد الاليكتروني (Email)</label>
                <p class="control has-icon has-icon-left">
                    <input name="email" v-validate data-vv-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger has-text-right">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">رقم الهاتف (Phone)</label>
                <p class="control has-icon has-icon-left">
                    <input name="phone" v-validate data-vv-rules="required|numeric" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
                    <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('phone')" class="help is-danger has-text-right">{{ errors.first('phone') }}</span>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;button @click=&quot;changeLocale&quot; type=&quot;button&quot; class=&quot;button is-primary&quot;>Change Locale&lt;/button&gt;
            &lt;div class=&quot;columns is-rtl&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;email&quot; v-validate data-vv-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;errors.has('email')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('email')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Phone&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;email&quot; v-validate data-vv-rules=&quot;required|numeric&quot; :class=&quot;{'input': true, 'is-danger': errors.has('phone') }&quot; type=&quot;text&quot; placeholder=&quot;Phone&quot;&gt;
                        &lt;i v-show=&quot;errors.has('phone')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('phone')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('phone') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        </div>
        <div slot="code-js">
            import messages from './locale/ar';
            import Vue from 'vue';
            import VeeValidate, { Validator } from 'vee-validate';
            Vue.use(VeeValidate);

            // Merge dictionary messages.
            Validator.updateDictionary({
                ar: {
                    messages,
                    attributes: {
                        email: 'البريد الاليكتروني',
                        phone: 'رقم الهاتف'
                    }
                }
            });
            new Vue({
                el: 'body',
                data: {
                    phone: '',
                    email: ''
                },
                methods: {
                    changeLocale() {
                        const locale = this.$validator.getLocale() === 'ar' ? 'en' : 'ar';
                        this.$validator.setLocale(locale);
                    }
                }
            });
        </div>

    </code-example>
</template>

<script>
import messages from './../../strings/ar';

export default {
    data: () => ({
        email: '',
        phone: '',
        locale: 'en',
    }),
    computed: {
        nextLocale() {
            return this.locale === 'en' ? 'Arabic' : 'English';
        }
    },
    methods: {
        changeLocale() {
            this.locale = this.$validator.getLocale() === 'ar' ? 'en' : 'ar';
            this.$validator.setLocale(this.locale);
        }
    },
    created() {
        this.$validator.updateDictionary({
            ar: {
                messages: messages.default,
                attributes: {
                    email: 'البريد الاليكتروني',
                    phone: 'رقم الهاتف'
                }
            }
        });
    }
};
</script>

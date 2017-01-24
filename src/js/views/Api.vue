<template>
    <div>
        <h2 id="directive" class="title is-4"><a href="#directive">v-validate Directive</a></h2>
        <p>
            The <code>v-validate</code> directive is the main way to validate your inputs, the directive accepts either a string or an object as a value.
            <br>
            If a string was passed it must be a valid rules string, that is the validation rules seperated by pipes '|'.
            <code-block class="language-html">
                &lt;input v-validate=&quot;'required|email'&quot; name=&quot;field&quot; type=&quot;text&quot;&gt;
            </code-block>
            <br>
            If an object was passed it must contain a rules property which can be either a rule string like above or an object, along with the following:
            <code-block class="language-javascript">
                const expression = {
                    rules: 'required|regex:^[0-9]+$', // required
                    scope: 'myscope', // optional
                    arg: 'form.email' // optional
                };
                
                // Or use the object form for increased flexibility.
                const expression = {
                    rules: {
                        // parameterless rules take a boolean value.
                        required: true,
                        // single parameter rules take a single value.
                        regex: /.(js|ts)$/,
                        // multiple paramter rules take a single array.
                        in: [1, 2, 3]
                    },
                    scope: 'myscope',
                    arg: 'from.email'
                };
            </code-block>
            <h2 class="title is-5"><a href="#directive-args">args</a></h2>
            The directive also accepts an arg, that denotes the name of the vue model to validate.
            <code-block class="language-html">
                &lt;input v-model=&quot;email&quot; v-validate:email=&quot;'required|email'&quot; name=&quot;field&quot; type=&quot;text&quot;&gt;
            </code-block>
            <code-block class="language-javascript">
                export default {
                    data: () => ({
                        email: ''
                    })
                };
            </code-block>
            For more complex args like a nested model, you may want to pass an object to the directive containing an <code>arg</code> property which is mentioned above. Don't forget to send a <code>rules</code> property as well.
        </p>
        <h2 id="data-attributes" class="title is-4"><a href="#data-attributes">data-* Attributes</a></h2>
        <p>
            data-* attributes provide an alternate interface for the plugin to specify what exactly should happen, providing a simple and Vue version-compatiable API. They are useful if you do not like to pass complex expressions to the directive.
        </p>
        <br>
        <data-attributes-api></data-attributes-api>
        <h2 id="error-bag" class="title is-4"><a href="#error-bag">ErrorBag</a></h2>
        <p>
            The ErrorBag class is a wrapper around an array a collection object in other words, and is standalone and has no dependencies, you can use it in your code for any reason:
            <code-block class="language-javascript">
                import { ErrorBag } from 'vee-validate'; // ES6 Import.
                const bag = new ErrorBag();
            </code-block>
            The internal array contains the error objects, the structure is:
            <code-block class="language-javascript">
                {
                    errors: [
                        { field: 'Field name', msg: 'Error message', rule: 'Rule Name', scope: 'Scope Name' },
                        // other error objects.
                    ]
                }
            </code-block>
        </p>
        <errors-api></errors-api>
        <h2 id="validator" class="title is-4"><a href="#validator">Validator</a></h2>
        <p>
            The validator is injected to the Vue instance as <code class="inline">$validator</code> automatically.
            However it is also a stand alone class and can be used separately for programmatically validating values.
            The constructor can optionally take an object to map each field name to a set of validations.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';
                const validator = new Validator({
                    email: 'required|email',
                    name: 'required|alpha|min:3',
                }); // or Validator.create({ ... });
            </code-block>
            But you can construct the object without passing anything and add the validation rules later.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';
                const validator = new Validator();

                validator.attach('email', 'required|email'); // attach field.
                validator.attach('name', 'required|alpha', { prettyName: 'Full Name' }); // attach field with display name for error generation.

                validator.detach('email'); // you can also detach fields.
            </code-block>
            After that you can validate values with <code class="inline">validate(field, value)</code> which should return a boolean if all validations pass. Like this:
            <code-block class="language-javascript">
                validator.validate('email', 'foo@bar.com'); // true
                validator.validate('email', 'foo@bar'); // false
            </code-block>
            <note>
                Most validators return a Boolean, however some validators (very few) return a <code>Promise</code> The validator is aware of this and will only return a Promise if at least one validation yields a promise. the promise is resolved to boolean which you can later chain to check your fields.
            </note>
            <br>
            You can validate multiple values at the same time using <code class="inline">validateAll(obj)</code>:
            <code-block class="language-javascript">
                validator.validateAll({
                    email: 'foo@bar.com',
                    name: 'John Snow'
                });
            </code-block>
            Returns true if all values passed validation, false if at least one value failed validation. will return a <code>Promise</code> if at least one field validation rule returned a <code>Promise</code> which is also resolved to a boolean. The ErrorBag will be populated with any errors encountered.
            You can access the <code class="inline">errorBag</code> property directly or using <code class="inline">getErrors()</code>.
            <code-block class="language-javascript">
                var errorBag = validator.errorBag;
                // or
                var errorBag = validator.getErrors();
            </code-block>

            The validator instance can only generate messages for one locale at a time. But you need to use <code class="inline">setLocale</code> method to switch the validator locale.
            <code-block class="language-javascript">
                validator.setLocale('ar');
            </code-block>
            <note>
                All validators share the same locale configuration. so any locale changes will update all validator instances across your app.
                For more information about how to overwrite messages and add new ones, please refer to the <router-link :to="{ name: 'rules', hash: 'custom-messages' }" class="link">custom messages</router-link> section.
            </note>
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';

                // Also exposed on the class.
                Validator.setLocale('ar'); // Set all validator locales to 'ar'.
                Validator.create().getLocale() // 'ar';

                Validator.setLocale(); // resets to english because no argument was passed, all validators will be switched to English.
            </code-block>
        </p>
        <validator-api></validator-api>
        <h2 id="validator-example" class="title is-4"><a href="#validator-example">Validator Example</a></h2>
        <p>
            Here is an example of using the validator without the directive, which means you will be responsible for monitoring input changes on your own, and calling the API methods as you see fit.
            This example uses a Vue instance to simplify things, but it can be used in plain JavaScript as well.
        </p>
        <validator-example></validator-example>
    </div>
</template>

<script>
import ValidatorExample from './../components/examples/ValidatorExample.vue';
import ErrorsApi from './partials/API/Errors.vue';
import ValidatorApi from './partials/API/Validator.vue';
import DataAttributesApi from './partials/API/DataAttributes.vue';

export default {
    components: {
        ValidatorExample,
        ErrorsApi,
        ValidatorApi,
        DataAttributesApi
    }
};
</script>

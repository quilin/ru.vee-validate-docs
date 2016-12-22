<template>
    <div>
        <h2 id="debounce-example" class="title is-4"><a href="#debounce-example">Delayed Validation (Debounced)</a></h2>
        <p>
            You can specify a delay to debounce the input event, a case scenario that you may want to wait for the user to stop typing then validate the field.
            This can be achieved by adding a <code class="inline">data-vv-delay</code> attribute on the field being validated, and assign it the number of milliseconds you want to wait for.
        </p>
        <delay-example></delay-example>
        <h2 id="reject-example" class="title is-4"><a href="#reject-example">Reject Invalid Files</a></h2>
        <p>
            After validating a file, you may want to reject the uploaded file if it fails the validation, this can be done by adding
            the <code class="inline">reject</code> modifier to directive. so you would use it like this: <code class="inline">v-validate.reject</code>.
            <note>
                The <code>reject</code> modifier is only relevant on file inputs, adding it to other input types will not have an effect.
            </note>
        </p>
        <reject-example></reject-example>
        <h2 id="validate-data-vv-example" class="title is-4"><a href="#validate-data-vv-example">Validate $data</a></h2>
        <p>
            The basic approach relies on listening to the <code class="inline">input</code> or the <code class="inline">change</code> events along with <code class="inline">blur</code> event depending on the input type.
            However most of the time, your values are bound to your Vue instance and some code may change their inputs programatically, the basic approach won't detect this change.
            <br><br>
            <b class="important">The Solution:</b> The <code class="inline">v-validate</code> directive can take a binding expression, the expression is the data name you wish to validate. for example:
            <code-block class="language-html">
                &lt;input v-validate=&quot;email&quot; data-vv-rules=&quot;required|email&quot; type=&quot;text&quot; name=&quot;email&quot;&gt;
            </code-block>
            Whenever the binding value is updated, the validator will validate the new value automatically.
            <note>
                The plugin will use the data in your vue instance as the source of the input value, meaning it won't be watching the input via events anymore. Still you must provide a <code>name</code> or <code>data-vv-name</code> attributes.
            </note>
         </p>
         <data-example></data-example>
         <p>
            <note>
                Notice that the <code>email</code> field was immediatly validated when you open the page, you may not want this behavior, use the <code>initial</code> modifier to tell the validator to ignore the first evaluation like this: <code>v-validate.initial</code>.
                <br>For example the name field above didn't display any errors when you opened this page.
                This attribute is only relevant when validating using binding expressions, it has no effect otherwise.
            </note>
            <note>
                When you provide a binding expression to the directive, <code>delay</code> attribute and <code>reject</code> modifier won't have an effect anymore. so you might want to handle debouncing the inputs yourself.
            </note>
         </p>
         <h2 id="validate-form" class="title is-4"><a href="#validate-form">Validate Form Before Submit</a></h2>
         <p>
            You may want to trigger all inputs validation before submitting a form, maybe display an alert or prevent form submission if any errors are detected.
         </p>
         <event-example></event-example>
         <h2 id="locale-example" class="title is-4"><a href="#locale-example">Localized Messages</a></h2>
         <p>
            You may want to display error messages in different languages, here is an example on how you may do that. The language below is Arabic (RTL):
         </p>
         <locale-example></locale-example>
         <note>
            You see us also provide attributes object when merging the arabic dictionary, which translates the field names, whenever a field name is matched with the currently active locale it will use the translated one when generating messages, check <router-link :to="{ name: 'localization' }">Localization page</router-link> for more details.
         </note>
         <h2 id="scope-example" class="title is-4"><a href="#scope-example">Scopes</a></h2>
         <p>
            By default the scope of the validator is the same as the Vue instance that owns it, sometimes you may have multiple fields within the same component, they are in different forms and serve different purposes.
            The validator will then treat those two fields as the same field which will cause problems detecting the input and displaying the errors.
            <br><br>
            You can tell the validator to scope the fields by adding a <code class="inline">data-vv-scope</code> attribute which tells the validator the name of the scope. Those fields will be then identified using their name and their scope. but currently that does not allow multiple fields with the same name, it just allows you to control validation and display errors for different scopes, and allows you to group inputs within a specific scope.
            <br><br>
            For convienece you may add the <code class="inline">data-vv-scope</code> on the form that owns the inputs, you don't have to add the attribute on each and every input.
         </p>
         <scope-example></scope-example>
         <h2 id="coupon-example" class="title is-4"><a href="#coupon-example">Custom Rule: Coupon</a></h2>
         <p>
            Let's say you want to validate something specific to your app domain that isn't provided by the default validators,
            for example lets validate a user coupon on checkout. If it is a valid coupon then you discount it for him, if not he pays the full price :(
            <br>

            Here is a list of our valid coupons: <code class="inline">SUMMER2016</code>, <code class="inline">WINTER2016</code> and <code class="inline">FALL2016</code>. each of which gives 20% off.

            The process of validation is as follows: we take the input and send it to backend, the response should determine if the coupon is valid which is up to you. here I'm simulating async behavior using <code class="inline">setTimeout</code>.

            <code class="inline">Vee-Validate</code> allows the usage of async validators, but it requires them to return a promise that resolves with an object containing the property <code class="inline">valid</code> which should equal a boolean state of the validation status.
         </p>
         <coupon-example></coupon-example>
         <h2 id="radio-buttons-example" class="title is-4"><a href="#radio-buttons-example">Radio Buttons</a></h2>
         <p>
            vee-validate also supports validating radio buttons, you can use whatever rules you want on them but only few rules makes sense, like <code class="inline">required</code>.
            One thing to note in this example is that you only need to use the directive on one of the radio buttons, you don't need to attach it on every one, they all have to share the same name though.
            <br><br>
            In the following example, the third value is not included using the rule <code class="inline">in:1,2</code>
         </p>
         <radio-buttons-example></radio-buttons-example>
         <h2 id="checkbox-example" class="title is-4"><a href="#checkbox-example">Checkbox Example</a></h2>
         <p>
            vee-validate also supports validating checkboxes, however like radio buttons the extend of the support is limited
            by the input nature itself, but all rules work regardless. like the radio buttons you only have attach the validator directive and attributes on the checkbox under validation
            if there are multiple checkboxes (group) you only have to add the directive on one of them.
            <br>
            If multiple values are selected, the validator will apply the validations on each checkbox.
            <br><br>
            In the following example, the most basic use of checkboxes validation is the terms and conditions agreement that nobody reads.
         </p>
         <checkbox-example></checkbox-example>
         <h2 id="flags-example" class="title is-4"><a href="#flags-example">Flags</a></h2>
         <p>
            vee-validate includes few flags that could help you improve your user experience, each field under validation has its own set of flags which are:
            <ul class="list-circle">
                <li>dirty: indicates that the field has been touched.</li>
                <li>clean: indicates that the field has not been touched.</li>
                <li>valid: indicates that the field is valid.</li>
                <li>passed: indicates that the field has been validated at least once and that it passed the validation.</li>
                <li>failed: indicates that the field has been validated at least once and that it failed the validation.</li>
            </ul>
            They are accessed via methods like this:
            <code-block class="language-javascript">
                this.fields.dirty('name'); // Is the 'name' field dirty?
                this.fields.dirty(); // Is at least one field dirty?

                this.fields.clean('name'); // Is the 'name' field clean?
                this.fields.clean(); // Are all fields clean?

                this.fields.valid('name'); // Is the 'name' field valid?
                this.fields.valid(); // Are all fields valid?

                this.fields.passed('name'); // Has the 'name' field passed?
                this.fields.passed(); // Have all fields passed the validation?

                this.fields.failed('name'); // Has the 'name' field failed?
                this.fields.failed(); // Has at least one field failed the validation?
            </code-block>
            Here is an example that uses those flags, the button is disabled unless one of the fields is dirty.
         </p>
         <flags-example></flags-example>
        <h2 id="selectors-example" class="title is-4"><a href="#selectors-example">Error Selectors</a></h2>
        <p>
            The <code class="inline">errors.first</code> and <code class="inline">errors.has</code> methods don't only provide you with a way to fetch the first input for a specific field, they also allow you to filter it down further to a specific rule, using the following syntax <code class="inline">'field:rule'</code>.
            <br>
            In the example below, you can specify which rule to display errors for.
        </p>
        <selectors-example></selectors-example>
        <h2 id="component-example" class="title is-4"><a href="#component-example">Custom Component Validation</a></h2>
        <p>
            You might have a custom component that you want to treat it as an input, like a custom input field, it would have its own validator instance but you want to validate it in the parent scope, because it is simply just an input with some whistles on top.
            You can achieve this by using the directive normally like you would on a regular input element, but you must make sure that your component satisfies the following:
            <ul class="list-circle">
                <li>Must emit an <code>input</code> event whenever the value changes.</li>
                <li>Should have a <code>data-vv-name</code> or a <code>name</code> attribute defined.</li>
                <li>Should have a <code>data-vv-value-path</code> attribute which denotes how to access the value from within that component (Needed for <code>validateAll</code> calls)</li>
            </ul>
        </p>
        <component-example></component-example>
    </div>
</template>

<script>
import DelayExample from './../components/examples/Delay.vue';
import LocaleExample from './../components/examples/Locale.vue';
import RejectExample from './../components/examples/FileReject.vue';
import ScopeExample from './../components/examples/Scopes.vue';
import DataExample from './../components/examples/Data.vue';
import EventExample from './../components/examples/Event.vue';
import CouponExample from './../components/examples/Coupon.vue';
import RadioButtonsExample from './../components/examples/RadioButtons.vue';
import CheckboxExample from './../components/examples/Checkbox.vue';
import FlagsExample from './../components/examples/Flags.vue';
import SelectorsExample from './../components/examples/Selectors.vue';
import ComponentExample from './../components/examples/Component.vue';

export default {
    components: {
        DelayExample,
        LocaleExample,
        RejectExample,
        ScopeExample,
        DataExample,
        EventExample,
        CouponExample,
        RadioButtonsExample,
        CheckboxExample,
        FlagsExample,
        SelectorsExample,
        ComponentExample
    }
};
</script>

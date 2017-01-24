<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <custom-input v-validate="'required|email'" data-vv-value-path="innerValue" data-vv-name="custom" label="Email" :has-error="errors.has('custom')">
                </custom-input>
                <span v-show="errors.has('custom')" class="help is-danger">{{ errors.first('custom') }}</span>
                <button @click="validate" type="button" class="button is-primary">Validate All</button>
            </div>
        </div>

        <div slot="code-html">
            &lt;!-- CustomInput.vue :: The Custom Component --&gt;
            &lt;template&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;{{ "{" + "{ label }" + "}" }}&lt;/label&gt;
                    &lt;p class=&quot;control&quot;&gt;
                        &lt;input v-model=&quot;innerValue&quot; :class=&quot;{ 'input': 'true', 'is-danger': hasError }&quot; type=&quot;text&quot; placeholder=&quot;Enter an email&quot;&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
            &lt;/template&gt;

            &lt;!-- Example.vue :: The Parent that contains the input --&gt;
            &lt;div class=&quot;columns is-multiline&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;custom-input v-validate=&quot;'required|email'&quot; data-vv-value-path=&quot;innerValue&quot; data-vv-name=&quot;custom&quot; label=&quot;Email&quot; :has-error=&quot;errors.has('custom')&quot;&gt;
                    &lt;/custom-input&gt;
                    &lt;span v-show=&quot;errors.has('custom')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('custom') }" + "}" }}&lt;/span&gt;
                    &lt;button @click=&quot;validate&quot; type=&quot;button&quot; class=&quot;button is-primary&quot;&gt;Validate All&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            // CustomInput.vue
            export default {
                props: {
                    label: String,
                    hasError: Boolean
                },
                data: () => ({
                    innerValue: null
                }),
                watch: {
                    innerValue(value) {
                        this.$emit('input', value);
                    }
                }
            };

            // Example.js
            import CustomInput from '../CustomInput.vue';

            export default {
                name: 'component-example',
                components: {
                    CustomInput
                },
                methods: {
                    validate() {
                        this.$validator.validateAll().then(result => {
                            alert(`Validation Result: ${result}`);
                        });
                    }
                }
            }
        </div>
    </code-example>
</template>

<script>
    import CustomInput from '../CustomInput.vue';

    export default {
        name: 'component-example',
        components: {
            CustomInput
        },
        methods: {
            validate() {
                this.$validator.validateAll().then(result => {
                    // eslint-disable-next-line
                    alert(`Validation Result: ${result}`);
                });
            }
        }
    };
</script>
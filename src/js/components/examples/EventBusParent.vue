<template>
    <code-example>
        <div class="columns is-multiline" slot="example">
            <child-component></child-component>
            <div class="column is-12">
                <button class="button is-primary" type="button" :disabled="errors.any()">Submit</button>
                <button class="button is-info" type="button" @click="validateChild">Validate Child</button>
                <button class="button is-danger" type="button" @click="clearChild">Clear Child Errors</button>
            </div>
        </div>

        <div slot="code-html">
            &lt;!-- Child Component Template --&gt;
            &lt;div class=&quot;columns is-multiline&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;name&quot; v-validate=&quot;name&quot; data-vv-rules=&quot;required|alpha&quot; :class=&quot;{'input': true, 'is-danger': errors.has('name') }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;errors.has('name')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('name')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name') }" +"}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;!-- Parent Component Template --&gt;
            &lt;div class=&quot;columns is-multiline&quot; slot=&quot;example&quot;&gt;
                &lt;child-component&gt;&lt;/child-component&gt;
                &lt;button class=&quot;button is-primary&quot; type=&quot;button&quot; :disabled=&quot;errors.any()&quot;&gt;Submit&lt;/button&gt;
                &lt;button class=&quot;button is-primary&quot; type=&quot;button&quot; @click=&quot;validateChild&quot;&gt;Validate Child&lt;/button&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            // bus.js
            import Vue from 'vue';

            const bus = new Vue();

            export default bus;


            // child.js
            import bus from './bus';

            export default {
                name: 'child-component',
                methods: {
                    onValidate() {
                        this.$validator.validateAll();
                    },
                    onClear() {
                        this.errors.clear();
                    }
                },
                created() {
                    bus.$on('validate', this.onValidate);
                    bus.$on('clear', this.onClear);
                    this.$watch(() => this.errors.errors, (value) => {
                        bus.$emit('errors-changed', value);
                    });
                },
                beforeDestroy() {
                    bus.$off('validate', this.onValidate);
                    bus.$off('clear', this.onClear);
                }
            };

            // parent.js
            import bus from './bus';
            import ChildComponent from './EventBusChild.vue';

            export default {
                name: 'event-bus-example',
                components: {
                    ChildComponent
                },
                methods: {
                    validateChild() {
                        bus.$emit('validate');
                    },
                    clearChild() {
                        bus.$emit('clear');
                    }
                },
                created() {
                    bus.$on('errors-changed', (errors) => {
                        this.errors.clear();
                        errors.forEach(e => {
                            this.errors.add(e.field, e.msg, e.rule, e.scope);
                        });
                    });
                }
            };
        </div>
    </code-example>
</template>

<script>
    import bus from './bus';
    import ChildComponent from './EventBusChild.vue';

    export default {
        name: 'event-bus-example',
        components: {
            ChildComponent
        },
        methods: {
            validateChild() {
                bus.$emit('validate');
            },
            clearChild() {
                bus.$emit('clear');
            }
        },
        created() {
            bus.$on('errors-changed', (errors) => {
                this.errors.clear();
                errors.forEach(e => {
                    this.errors.add(e.field, e.msg, e.rule, e.scope);
                });
            });
        }
    };
</script>
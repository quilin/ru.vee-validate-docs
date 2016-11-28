<template>
    <code-example>
        <div class="columns is-multiline" slot="example">
            <div class="column is-12">
                <label class="label">Write The Rule Name (required, alpha_spaces, min)</label>
                <p class="control">
                    <input v-model="rule" class="input" type="text" placeholder="Rule Name">
                </p>
            </div>
            <div class="column is-12">
                <label class="label">The Value</label>
                <p class="control has-icon has-icon-right">
                    <input name="name" v-validate data-vv-rules="required|alpha_spaces|min:3" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
                    <i v-show="errors.has(`name${rule ? ':' + rule : ''}`)" class="fa fa-warning"></i>
                    <span v-show="errors.has(`name${rule ? ':' + rule : ''}`)" class="help is-danger">{{ errors.first(`name${rule ? ':' + rule : ''}`) }}</span>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns is-multiline&quot; slot=&quot;example&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Write The Rule Name (required, alpha_spaces, min)&lt;/label&gt;
                    &lt;p class=&quot;control&quot;&gt;
                        &lt;input v-model=&quot;rule&quot; class=&quot;input&quot; type=&quot;text&quot; placeholder=&quot;Rule Name&quot;&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;The Value&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;name&quot; v-validate data-vv-rules=&quot;required|alpha_spaces|min:3&quot; :class=&quot;{'input': true, 'is-danger': errors.has('name') }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;errors.has(`name${rule ? ':' + rule : ''}`)&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has(`name${rule ? ':' + rule : ''}`)&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first(`name${rule ? ':' + rule : ''}`) }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            Vue.use(VeeValidate);

            new Vue({
                el: '#app',
                data: () => ({
                    rule: ''
                })
            });
        </div>
    </code-example>
</template>

<script>
    export default {
        data: () => ({
            rule: ''
        })
    };
</script>

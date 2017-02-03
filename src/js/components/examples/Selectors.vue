<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <label class="label">Write The Rule Name (required, alpha_spaces, min)</label>
            <p class="control">
                <input v-model="rule" class="input" type="text" placeholder="Rule Name">
            </p>
        </div>
        <div class="column is-12">
            <label class="label">The Value</label>
            <p class="control has-icon has-icon-right">
                <input name="name" v-validate="'required|alpha_spaces|min:3'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
                <i v-show="errors.has(`name${rule ? ':' + rule : ''}`)" class="fa fa-warning"></i>
                <span v-show="errors.has(`name${rule ? ':' + rule : ''}`)" class="help is-danger">{{ errors.first(`name${rule ? ':' + rule : ''}`) }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'selectors-example',
        data: () => ({
            rule: ''
        })
    };
</script>

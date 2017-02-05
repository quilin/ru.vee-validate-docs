<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <label class="label">Name</label>
            <p class="control has-icon has-icon-right">
                <input name="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': fields.failed('name'), 'is-success': fields.passed('name') }" type="text" placeholder="Name">
                <i v-show="fields.failed('name') || fields.passed('name')" :class="{ 'fa': true, 'fa-warning': fields.failed('name'), 'fa-check': fields.passed('name') }"></i>
                <span v-show="fields.failed('name')" class="help is-danger">{{ errors.first('name') }}</span>
            </p>
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
                <input v-model="email" name="email" v-validate:email="'required|email'" :class="{'input': true, 'is-danger': fields.failed('email'), 'is-success': fields.passed('email') }" type="text" placeholder="Email">
                <i v-show="fields.failed('email') || fields.passed('email')" :class="{ 'fa': true, 'fa-warning': fields.failed('email'), 'fa-check': fields.passed('email') }"></i>
                <span v-show="fields.failed('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
            <p class="control">
                <button type="button" class="button is-primary" :disabled="fields.clean()">Save</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'flags-example',
    data: () => ({
        email: ''
    })
};
</script>

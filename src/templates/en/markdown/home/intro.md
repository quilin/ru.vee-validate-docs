## [What is vee-validate?](#about)

This is a lightweight plugin for [Vue.js](https://vuejs.org/) that allows you to validate input fields, and display errors.  

You don't have to do anything fancy in your app, most of the work goes into the html. You only need to specify for each input what kind of validators should be used when the value changes. You will then get informed of the errors for each field.  

Although most of the validations occur automatically, you can use the validator however you see fit. The validator object has no dependencies and is a standalone object.  

Currently there are over 20 validation rules available in the plugin. This plugin is inspired by [PHP Framework Laravel's validation syntax](https://laravel.com/).  

It also supports Vue 2.0\. All examples here are built using Vue 2.0 with the plugin.

## [Installation](#installation)

You can install this plugin via [npm](#npm) or [bower](#bower) or via a [CDN](#cdn).

### [npm](#npm)

**Vue 1.x**
```bash
npm install vee-validate@prev --save
```

**Vue 2.x**
```bash
npm install vee-validate --save
```

### [bower](#bower)

**Vue 1.x**
```bash
bower install vee-validate#1.0.0-beta.11 --save
```

**Vue 2.x**
```bash
bower install vee-validate#2.0.0-beta.22 --save
```

### [CDN](#cdn)

Head over to [jsdelivr](https://www.jsdelivr.com/projects/vee-validate) and grab the latest version. Then you may use it like this: 

```html
  <script src="path/to/vue.js"></script>
  <script src="path/to/vee-validate.js"></script>
  <script>
    Vue.use(VeeValidate); // good to go. 
  </script>
```

or you may import it using **ES6**:

```js
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
```

## [Basic Example](#basic-example)

All you need is to add the `v-validate` directive to the input you wish to validate.  

Then pass to the directive a `rules` string which contains a list of validation rules separated by a pipe '`|`'. For the following example the validation rules are straight forward, use `required` to indicate that the field is required. And `email` to indicate that the field must be an email. To combine both rules we assign the string value `required|email` to the `v-validate` expression value.
## [Validate Models](#validate-model-example)

The `v-validate` directive detects if the input has `v-model` bound to the same input, and watches for that value and validates it when it changes. But it can also listen for changes in computed properties by using the arg like this:

```html
<input v-validate:name="'required|alpha_spaces'" type="text" name="name">
```

```js
export default {
  data: () => ({
    first_name: '',
    last_name: ''
  }),
  computed: {
    name() {
      return this.first_name + ' ' + this.last_name;
    }
  }
};
```

As you can see, the arg is `name` which tells `v-validate` to watch for whenever the name changes, this example might be a little bit silly, but you might need this functionality.

> The expression for both the arg and the `v-model` directive must be a simple dot notation expression, and that expression must exist on the instance. For example having inputs in a loop bound by the iterator won't work properly.
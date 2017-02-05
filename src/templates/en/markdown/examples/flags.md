## [Flags](#flags-example)

vee-validate includes few flags that could help you improve your user experience, each field under validation has its own set of flags which are:

- dirty: indicates that the field has been touched.
- clean: indicates that the field has not been touched.
- valid: indicates that the field is valid.
- passed: indicates that the field has been validated at least once and that it passed the validation.
- failed: indicates that the field has been validated at least once and that it failed the validation.

They are accessed via methods like this:

```js
// Is the 'name' field dirty? 
this.fields.dirty('name');

// Is at least one field dirty?
this.fields.dirty(); 

// Is the 'name' field clean? 
this.fields.clean('name'); 

// Are all fields clean?
this.fields.clean(); 

// Is the 'name' field valid?
this.fields.valid('name'); 

// Are all fields valid?
this.fields.valid(); 

// Has the 'name' field passed?
this.fields.passed('name'); 

// Have all fields passed the validation?
this.fields.passed(); 

// Has the 'name' field failed? 
this.fields.failed('name');
// Has at least one field failed the validation?`
this.fields.failed(); 
```

Here is an example that uses those flags, the button is disabled unless one of the fields is dirty:

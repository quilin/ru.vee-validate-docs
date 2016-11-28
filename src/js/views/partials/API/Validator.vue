<template>
    <div>
        <h2 id="validator-public-props" class="title is-5"><a href="#validator-public-props">Public Properties</a></h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="property in properties">
                    <td class="is-method-name">{{ property.name }}</td>
                    <td>{{ property.type }}</td>
                    <td>{{ property.description }}</td>
                </tr>
            </tbody>
        </table>
        <h2 id="validator-static-methods" class="title is-5"><a href="#validator-static-methods">Public Static Methods</a></h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Params</th>
                    <th>Return</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="method in methods.instance">
                    <td class="is-method-name">{{ method.name }}</td>
                    <td>{{ method.params }}</td>
                    <td>{{ method.returns }}</td>
                    <td>{{ method.description }}</td>
                </tr>
            </tbody>
        </table>
        <h2 id="validator-instance-methods" class="title is-5"><a href="#validator-instance-methods">Public Instance Methods</a></h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Params</th>
                    <th>Return</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="method in methods.instance">
                    <td class="is-method-name">{{ method.name }}</td>
                    <td>{{ method.params }}</td>
                    <td>{{ method.returns }}</td>
                    <td>{{ method.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    /* eslint-disable max-len */
    export default {
        name: 'validator-api',
        data: () => ({
            properties: [
                { name: 'errorBag', type: 'ErrorBag', description: 'Contains the errors for the validator instance.' },
                { name: 'fieldBag', type: 'FieldBag', description: 'Contains the fields\' flags for the validator instance.' },
                { name: 'strictMode', type: 'Boolean', description: 'The strict mode status for the validator instance.' }
            ],
            methods: {
                static: [
                    {
                        name: 'create',
                        params: '{String validations?},{Vue vm?}',
                        returns: 'Validator',
                        description: 'Creates a validator object.'
                    },
                    {
                        name: 'extend',
                        params: '{String name}, {Object|Function validator}',
                        returns: 'undefined',
                        description: 'Adds a custom validator to the list of the available validators. Throws an exception if the validator already exists.'
                    },
                    {
                        name: 'installDateTimeValidators',
                        params: '{Moment moment}',
                        returns: 'undefined',
                        descriptions: 'Activates the DateTime validators, requires a moment reference.'
                    },
                    {
                        name: 'remove',
                        params: '{String name}',
                        returns: 'undefined',
                        description: 'Removes a validator/rule from the list of validations if it exists.'
                    },
                    {
                        name: 'setLocale',
                        params: '{String language?}',
                        returns: 'undefined',
                        description: 'Sets the active locale for all validators, not specifying a locale will set it to English.'
                    },
                    {
                        name: 'setStrictMode',
                        params: '{Boolean strict}',
                        returns: 'undefined',
                        description: 'Sets the operating mode for the validator instance.'
                    },
                    {
                        name: 'updateDictionary',
                        params: '{Object data}',
                        returns: 'undefined',
                        description: 'Updates the dictionary for messages and attributes that is shared by all validators, overwriting any duplicates.'
                    }
                ],
                instance: [
                    {
                        name: 'attach',
                        params: '{String field}, {String|Object checks}, {String prettyName?}, {Function context?}, {Function getter?}',
                        returns: 'undefined',
                        description: 'Registers a field for validation, specifying a prettyName will cause that name to be used instead of the actual field name.'
                    },
                    {
                        name: 'detach',
                        params: '{String name}, {String scope}',
                        returns: 'undefined',
                        description: 'Removes (unregisters) the field from the validator, this will also remove all its errors.'
                    },
                    {
                        name: 'extend',
                        params: '{String name}, {Object|Function validator}',
                        returns: 'undefined',
                        description: 'Adds a custom validator to the list of the available validators. Throws an exception if the validator already exists.'
                    },
                    {
                        name: 'getErrors',
                        params: '',
                        returns: 'ErrorBag',
                        description: 'Gets the internal ErrorBag instance.'
                    },
                    {
                        name: 'getLocale',
                        params: '',
                        returns: 'String',
                        description: 'Gets the currently active locale identifier.'
                    },
                    {
                        name: 'installDateTimeValidators',
                        params: '{Moment moment}',
                        returns: 'undefined',
                        descriptions: 'Activates the DateTime validators, requires a moment reference.'
                    },
                    {
                        name: 'remove',
                        params: '{String name}',
                        returns: 'undefined',
                        description: 'Removes a validator/rule from the list of validations if it exists.'
                    },
                    {
                        name: 'setLocale',
                        params: '{String language?}',
                        returns: 'undefined',
                        description: 'Sets the active locale for all validators, not specifying a locale will set it to English.'
                    },
                    {
                        name: 'setStrictMode',
                        params: '{Boolean strict}',
                        returns: 'undefined',
                        description: 'Sets the operating mode for the validator instance.'
                    },
                    {
                        name: 'updateDictionary',
                        params: '{Object data}',
                        returns: 'undefined',
                        description: 'Updates the dictionary for messages and attributes that is shared by all validators, overwriting any duplicates.'
                    },
                    {
                        name: 'validate',
                        params: '{String field}, {String value}, {String scope?}',
                        returns: 'Boolean|Promise',
                        description: 'Runs the value against the list of registered validations for the specified field, specifying a scope will validate the field within that scope. It will return a boolean unless at least one validator returns a Promise, the method will then return a promise which can be later resolved to a boolean.'
                    },
                    {
                        name: 'validateAll',
                        params: '{Object values?}',
                        returns: 'Promise',
                        description: 'Validates each field (key), and value of the values object against their respective list of validators, returns a promise that can be later resolved to a Boolean. Not specifying a values object will force the validator to retrive as much values as it reliably can.'
                    }
                ]
            }
        })
    };
</script>

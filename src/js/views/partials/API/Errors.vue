<template>
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
            <tr v-for="method in methods">
                <td class="is-method-name">{{ method.name }}</td>
                <td>{{ method.params }}</td>
                <td>{{ method.returns }}</td>
                <td>{{ method.description }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    /* eslint-disable max-len */
    export default {
        data: () => ({
            methods: [
                {
                    name: 'add',
                    params: '{String field}, {String msg}, {String ruleName}, {String scope?}',
                    returns: 'undefined',
                    description: 'Adds an error to the errors object.'
                },
                {
                    name: 'all',
                    params: '{String scope?}',
                    returns: 'Array',
                    description: 'Gets all error messages in an array, specifying a scope will retrive the messages within that scope.'
                },
                {
                    name: 'any',
                    params: '{String scope?}',
                    returns: 'Boolean',
                    description: 'Checks if any errors exist, specifying a scope will limit the check to within that scope.'
                },
                {
                    name: 'clear',
                    params: '{String scope?}',
                    returns: 'undefined',
                    description: 'Clears (removes) all errors, specifying a scope will remove errors only associated with that scope.'
                },
                {
                    name: 'collect',
                    params: '{String name?},{String scope?}',
                    returns: 'Array|Object',
                    description: 'Collects errors associated with a specific field. not passing the field name will group all errors by field name instead. specifying a scope will limit the collecting behavior to a specific scope.'
                },
                {
                    name: 'count',
                    params: '',
                    returns: 'Number',
                    description: 'Returns the number of errors that are currently in the collection.'
                },
                {
                    name: 'first',
                    params: '{String field|selector}, {String scope?}',
                    returns: 'String',
                    description: 'Returns the first error message associated with a specific field or specified by the selector, providing a scope will look for messages within that scope.'
                },
                {
                    name: 'firstByRule',
                    params: '{String field}, {String rule}, {String scope?}',
                    returns: 'String',
                    description: 'Returns the first error message associated with a specific field and rule, providing a scope will look for messages within that scope.'
                },
                {
                    name: 'has',
                    params: '{String field|selector}, {String scope?}',
                    returns: 'Boolean',
                    description: 'Checks if there is an error message associated with a specific field or specified by the selector, providing a scope will check for messages within that scope.'
                },
                {
                    name: 'remove',
                    params: '{String field}, {String scope?}',
                    returns: 'undefined',
                    description: 'Removes all errors associated with a specific field, specifying a scope will remove messages only for that field and scope.'
                }
            ]
        })
    };
</script>

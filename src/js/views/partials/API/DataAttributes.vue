<template>
    <table class="table">
        <thead>
            <tr>
                <th>Attribute</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="attribute in attributes">
                <td class="is-method-name">{{ attribute.name }}</td>
                <td>{{ attribute.description }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    /* eslint-disable max-len */
    export default {
        data: () => ({
            attributes: [
                { name: 'data-vv-as', description: 'Specifies a pretty name for the field.' },
                { name: 'data-vv-delay', description: 'Specifies the delay amount in milliseconds for triggering the validation.' },
                { name: 'data-vv-name', description: 'Specifies a name for the field, used in components validation and as a fallback.' },
                { name: 'data-vv-rules', description: 'Specifies the list of validations to be run against the field value.' },
                { name: 'data-vv-value-path', description: 'Specifies the value path within a component $data to retrive the component current value.' },
            ]
        })
    };
</script>

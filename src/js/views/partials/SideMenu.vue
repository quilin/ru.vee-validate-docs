<template>
    <aside class="menu sidebar">
        <animated-button link="https://github.com/logaretm/vee-validate">
            <div class="flex-div" slot="default">
                <svg class="icon"><use xlink:href="#github"></use></svg>
                Star
            </div>
            <div class="flex-div" slot="hover">
                <svg class="icon"><use xlink:href="#i-star"></use></svg>
                {{ stars }}
            </div>
        </animated-button>
        <p class="menu-label">
            Getting Started
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#about'}">What is vee-validate?</router-link></li>
            <li>
                <router-link active-class="is-active" :to="{ name: 'home', hash: '#installation'}">Installation</router-link>
                <ul>
                    <li><router-link :to="{ name: 'home', hash: '#npm'}">npm</router-link></li>
                    <li><router-link :to="{ name: 'home', hash: '#bower'}">bower</router-link></li>
                    <li><router-link :to="{ name: 'home', hash: '#cdn'}">CDN</router-link></li>
                </ul>
            </li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#basic-example'}">Basic Example</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#render-errors'}">Rendering Errors</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#available-rules'}">Available Validations</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#configuration'}">Configuration</router-link></li>
        </ul>
        <p class="menu-label">
            Validation Rules
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#syntax'}">Syntax</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#available-validations'}">Available Validations</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#custom-rules'}">Custom Validations</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#custom-messages'}">Custom Messages</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#custom-attributes'}">Custom Attributes</router-link></li>
        </ul>
        <p class="menu-label">
            Localization
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#translation'}">Translation</router-link></li>
            <li>
                <router-link active-class="is-active" :to="{ name: 'localization', hash: '#attributes-data-vv-as'}">Attributes</router-link>
                <ul>
                    <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#attributes-data-vv-as'}">data-vv-as</router-link></li>
                    <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#attributes-dictionary'}">dictionary</router-link></li>
                </ul>
            </li>
            <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#localized-files'}">Localized Files</router-link></li>
        </ul>
        <p class="menu-label">
            Examples
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#debounce-example'}">Debounce</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#reject-example'}">Reject Files</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#validate-data-vv-example'}">Validating Expressions</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#validate-form'}">Form Validation</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#locale-example'}">Localized Messages</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#scope-example'}">Validation Scopes</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#coupon-example'}">Custom Validation: Coupon</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#radio-buttons-example'}">Radio Buttons Validation</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#checkbox-example'}">Checkbox Example</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#flags-example'}">Validation Flags</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#selectors-example'}">Error Selectors</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#component-example'}">Component Validation</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#event-bus-example'}">Event Bus</router-link></li>
        </ul>
        <p class="menu-label">
            API
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#directive'}">v-validate</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#data-attributes'}">data-* Attributes</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#error-bag'}">Error Bag</router-link></li>
            <li>
                <router-link active-class="is-active" :to="{ name: 'api', hash: '#validator'}">Validator</router-link>
                <ul>
                    <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#validator'}">API</router-link></li>
                    <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#validator-example'}">Example</router-link></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
    import axios from 'axios';
    import AnimatedButton from './AnimatedButton.vue';

    export default {
        name: 'side-menu',
        components: {
            AnimatedButton
        },
        data: () => ({
            stars: 0
        }),
        created() {
            axios.get('https://api.github.com/repos/logaretm/vee-validate').then(response => {
                this.stars = response.data.stargazers_count;
            });
        }
    };
</script>
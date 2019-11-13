window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from './store/store';
import VeeValidate from 'vee-validate';
import './utilities/globalFunctions.js';
import Vue2Filters from 'vue2-filters';

Vue.use(VeeValidate, {
    events: 'input|blur',
    classes: true,
    classNames:{invalid: 'is-invalid'}
});
Vue.use(Vue2Filters);
const app = new Vue({
    el: '#root',
    template: `<app></app>`,
    components: {App},
    router,
    store
});
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;
require('bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import VeeValidate from 'vee-validate';
import './store/filters.js';
import './store/globalFunctions.js';
Vue.use(VeeValidate);
const app = new Vue({
    el:'#root',
    template: `<app></app>`,
    components:{ App },
    router,
    store,
});
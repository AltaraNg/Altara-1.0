import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
const app = new Vue({
    el:'#root',
    template: `<app></app>`,
    components:{ App },
    router,
    store,
});
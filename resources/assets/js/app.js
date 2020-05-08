window.$ = window.jQuery = require("jquery");
window.Popper = require("popper.js").default;
require("bootstrap");
import Vue from "vue";
var VueTruncate = require("vue-truncate-filter");
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import VeeValidate from "vee-validate";
import "./utilities/globalFunctions.js";
import VueSweetalert2 from "vue-sweetalert2";
import VuexRouterSync from "vuex-router-sync";
import _ from 'lodash';


Object.defineProperty(Vue.prototype, '$_', { value: _ });
VuexRouterSync.sync(store, router);
Vue.use(VeeValidate, {
    events: "input|blur",
    classes: true,
    classNames: { invalid: "is-invalid" }
});
Vue.use(VueTruncate);
const app = new Vue({
    el: "#root",
    template: `<app></app>`,
    components: { App },
    router,
    store
});

const options = {
    confirmButtonColor: "#05314d",
    cancelButtonColor: "#05314d"
};

Vue.use(VueSweetalert2, options);

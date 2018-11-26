import Vue from 'vue';
import Flash from '../helpers/flash';
import {store} from '../store/store';
//NB functions her can be accessed anywhere
// on the project(vue components)
// by using this.$functionName
Vue.prototype.$isProcessing = false;
//this is basically used in any form to avoid submitting
// forms more than once or repeatedly
// while processing already

Vue.prototype.$LIPS = function (s) {
    this.$store.state.loader = this.$isProcessing = s;
    //sets loader to true(show) or false(hide); isProcessing
    // if true (disables the button its called on)
    // or disables is if true
};
Vue.prototype.$scrollToTop = function () {
    $("html, body").animate({scrollTop: 0}, 500);
    //scrolls the page (with animation) to the top
};
Vue.prototype.$getDate = function () {
    const toTwoDigits = num => num < 10 ? '0' + num : num;
    let today = new Date(),
        year = today.getFullYear(),
        month = toTwoDigits(today.getMonth() + 1),
        day = toTwoDigits(today.getDate());
    return `${year}-${month}-${day}`;
    //return the current date; format : yyyy-mm-dd;
};
Vue.prototype.$network = function () {
    //return the network status(true | false) of the system if connected to a
    // network not NB: this doesn't work with internet access. it only
    //detects the system is connected to a network
    return window.navigator.onLine;
    //return true;
};

Vue.prototype.$networkErr = function (err = '') {
    this.$scrollToTop();
    this.$LIPS(false);
    let msg = 'Your are not connected to the network please wait till network is back!';
    if (err == 'form') msg = 'Please ensure all the fields are filled correctly!';
    if (err == 'page') msg = 'You do not have access to that page!';
    if (err == 'edit') msg = 'You do not have access to edit details because it is out of your jurisdiction!';
    Flash.setError(msg, 10000);
    //custom message for network "no network connection" and
    //form field validation error
};

Vue.prototype.$editAccess = function (user = '', customer = '') {
    if (!!user && !!customer) {
        if (store.getters.verifyDSAAccess) {
            if (store.state.DSALead.includes(user.role_id)) {
                return true;
            } else {
                if (user.branch_id === customer.user.branch_id) {
                    if (store.state.DSACaptain.includes(user.role_id)) {
                        return true;
                    } else {
                        if (user.id === customer.user.id) {
                            return true
                        } else return false;
                    }
                } else return false;
            }
        } else if (store.getters.verifyDVAAccess) {
            if (store.state.DVALead.includes(user.role_id)) {
                return true
            } else {
                if (user.branch_id === customer.user.branch_id) {
                    return true
                } else return false;
            }
        } else return false;
    } else return false;
};

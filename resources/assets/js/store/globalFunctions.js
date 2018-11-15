import Vue from 'vue';
import Flash from '../helpers/flash';
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
    Flash.setError(msg);
    //custom message for network "no network connection" and
    //form field validation error
};
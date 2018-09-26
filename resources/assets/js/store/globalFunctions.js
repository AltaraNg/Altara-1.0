import Vue from 'vue';

Vue.prototype.$isProcessing = false;
Vue.prototype.$LIPS = function (s) {
    this.$store.state.loader = this.$isProcessing = s;
};
Vue.prototype.$scrollToTop = function () {
    $("html, body").animate({scrollTop: 0}, 500);
};
Vue.prototype.$getDate = function () {
    const toTwoDigits = num => num < 10 ? '0' + num : num;
    let today = new Date(),
        year = today.getFullYear(),
        month = toTwoDigits(today.getMonth() + 1),
        day = toTwoDigits(today.getDate());
    return `${year}-${month}-${day}`;
};
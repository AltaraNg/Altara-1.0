//noinspection JSAnnotator
import Vue from 'vue';

Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = ((value.toString()).replace(/_/g, ' ')).split(" ");
    for (let i = 0 ; i < value.length ; i++){
        value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
    }
    return (value.join()).replace(/,/g, ' ');
});

Vue.filter('slug', function (value) {
    if (!value) return '';
    return (value.replace(/ /g, '_')).toLowerCase();
});
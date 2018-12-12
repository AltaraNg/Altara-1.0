//noinspection JSAnnotator
import Vue from 'vue';

Vue.filter('capitalize', d => {
    if (d) {
        d = (d.replace(/_/g, ' ').split(" "));
        d.forEach((e, i, a) => a[i] = e.charAt(0).toUpperCase() + e.slice(1));
        return d.join(' ');
    }
    return '';
});

Vue.filter('slug', e => !e ? '' : (e.replace(/ /g, '_')).toLowerCase());
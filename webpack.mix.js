//const webpack = require('webpack');
let mix = require('laravel-mix');
mix
    .js([
        'resources/assets/js/app.js',
        'resources/assets/js/now-ui-kit.js',
    ], 'public/js/app.js')
    .styles([
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/now-ui-kit.css',
    ], 'public/css/all.css')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.options({ processCssUrls: false });
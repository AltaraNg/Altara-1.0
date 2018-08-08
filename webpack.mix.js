const webpack = require('webpack');
let mix = require('laravel-mix');
mix
    .js([
        'resources/assets/js/app.js',
        //core
        'resources/assets/js/core/jquery.3.2.1.min.js',
        'resources/assets/js/core/popper.min.js',
        'resources/assets/js/core/bootstrap.min.js',
        //plugins
        //'resources/assets/js/plugins/bootstrap-switch.js',
        //'resources/assets/js/plugins/chartist.min.js',
        //'resources/assets/js/plugins/bootstrap-notify.js',
        //'resources/assets/js/plugins/jquery.sharrre.js',
        //'resources/assets/js/plugins/jquery-jvectormap.js',
        //'resources/assets/js/plugins/moment.min.js',
        //'resources/assets/js/plugins/bootstrap-datetimepicker.js',
        //'resources/assets/js/plugins/sweetalert2.min.js',
        //'resources/assets/js/plugins/bootstrap-tagsinput.js',
        'resources/assets/js/plugins/nouislider.js',
        //'resources/assets/js/plugins/bootstrap-selectpicker.js',
        //'resources/assets/js/plugins/jquery.validate.min.js',
        //'resources/assets/js/plugins/jquery.bootstrap-wizard.js',
        //'resources/assets/js/plugins/bootstrap-table.js',
        //'resources/assets/js/plugins/jquery.dataTables.min.js',
        //'resources/assets/js/plugins/fullcalendar.min.js',
        'resources/assets/js/now-ui-kit.js',
    ], 'public/js/app.js')
    .autoload({
        jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"],
        'popper.js/dist/umd/popper.js': ['Popper']
    })
    .styles([
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/now-ui-kit.css',
    ], 'public/css/all.css')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .webpackConfig({
        plugins: [
            new webpack.IgnorePlugin(/\.\/locale$/)
        ]
    });
let mix = require('laravel-mix');
mix.js(['resources/assets/js/app.js', 'resources/assets/js/now-ui-kit.js'], 'public/js/app.js').version();
mix.sass('resources/assets/sass/app.scss', 'public/css').version();
mix.options({processCssUrls: false});
//mix.version();
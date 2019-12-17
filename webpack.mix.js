const mix = require('laravel-mix');
const tailwind = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
    .options({
    processCssUrls: false,
    postCss: [
    	tailwind('./tailwind.config.js')
	],
  });
//mix.browserSync('127.0.0.1:8000');
mix.copy('resources/images/', 'public/images/', false);
mix
    .webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].js',
            publicPath: '/'
        }
    });

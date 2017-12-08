'use strict';

var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix.sass('app.scss', 'dist/css', 'src/sass');
  mix.webpack('app.js', 'dist/js', 'src/js');
});

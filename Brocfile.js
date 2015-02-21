/* global require, module */
var EmberApp   = require('ember-cli/lib/broccoli/ember-app');
var app        = new EmberApp();
    app.static = require('broccoli-static-compiler');


/**
 * CSS
 */
// Pages Plugins
app.import('vendor/pages/plugins/pace/pace-theme-flash.css');
app.import('vendor/pages/plugins/boostrapv3/css/bootstrap.min.css');
app.import('vendor/pages/plugins/font-awesome/css/font-awesome.css');
app.import('vendor/pages/plugins/jquery-scrollbar/jquery.scrollbar.css');
app.import('vendor/pages/plugins/bootstrap-select2/select2.css');
app.import('vendor/pages/plugins/switchery/css/switchery.min.css');
app.import('vendor/pages/plugins/nvd3/nv.d3.min.css');
app.import('vendor/pages/plugins/mapplic/css/mapplic.css');
app.import('vendor/pages/plugins/rickshaw/rickshaw.min.css');
app.import('vendor/pages/plugins/bootstrap-datepicker/css/datepicker3.css');
app.import('vendor/pages/plugins/jquery-metrojs/MetroJs.css');

// Pages
app.import('vendor/pages/assets/css/pages-icons.css');
app.import('vendor/pages/assets/css/pages.css');



/**
 * JS
 */
// Pages Plugins
app.import('vendor/pages/plugins/pace/pace.min.js');
app.import('vendor/pages/plugins/jquery/jquery-1.11.1.min.js');
app.import('vendor/pages/plugins/modernizr.custom.js');
app.import('vendor/pages/plugins/jquery-ui/jquery-ui.min.js');
app.import('vendor/pages/plugins/boostrapv3/js/bootstrap.min.js');
app.import('vendor/pages/plugins/jquery/jquery-easy.js');
app.import('vendor/pages/plugins/jquery-unveil/jquery.unveil.min.js');
app.import('vendor/pages/plugins/jquery-bez/jquery.bez.min.js');
app.import('vendor/pages/plugins/jquery-ios-list/jquery.ioslist.min.js');
app.import('vendor/pages/plugins/jquery-actual/jquery.actual.min.js');
app.import('vendor/pages/plugins/jquery-scrollbar/jquery.scrollbar.min.js');
app.import('vendor/pages/plugins/bootstrap-select2/select2.min.js');
app.import('vendor/pages/plugins/classie/classie.js');
app.import('vendor/pages/plugins/switchery/js/switchery.min.js');
app.import('vendor/pages/plugins/nvd3/lib/d3.v3.js');
app.import('vendor/pages/plugins/nvd3/nv.d3.min.js');
app.import('vendor/pages/plugins/nvd3/src/utils.js');
app.import('vendor/pages/plugins/nvd3/src/tooltip.js');
app.import('vendor/pages/plugins/nvd3/src/interactiveLayer.js');
app.import('vendor/pages/plugins/nvd3/src/models/axis.js');
app.import('vendor/pages/plugins/nvd3/src/models/line.js');
app.import('vendor/pages/plugins/nvd3/src/models/lineWithFocusChart.js');
app.import('vendor/pages/plugins/mapplic/js/hammer.js');
app.import('vendor/pages/plugins/mapplic/js/jquery.mousewheel.js');
app.import('vendor/pages/plugins/mapplic/js/mapplic.js');
app.import('vendor/pages/plugins/rickshaw/rickshaw.min.js');
app.import('vendor/pages/plugins/jquery-metrojs/MetroJs.min.js');
app.import('vendor/pages/plugins/jquery-sparkline/jquery.sparkline.min.js');
app.import('vendor/pages/plugins/skycons/skycons.js');
app.import('vendor/pages/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js');

// Pages
app.import('vendor/pages/assets/js/pages.min.js');



/**
 * Assets
 */
var assets = [
  app.static('vendor/pages/plugins/font-awesome', {
    srcDir:  '/fonts', destDir: '/fonts', files: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff']
  }),
  app.static('vendor/pages/plugins/boostrapv3', {
    srcDir:  '/fonts', destDir: '/fonts', files: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff']
  }),
  app.static('vendor/pages/assets/fonts', {
    srcDir:  '/pages-icon', destDir: '/fonts/pages-icon', files: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff']
  }),
  app.static('vendor/pages/assets/fonts', {
    srcDir:  '/montserrat', destDir: '/fonts/montserrat', files: ['**/*.svg','**/*.ttf']
  }),
  app.static('vendor/pages/assets', {
    srcDir:  '/img', destDir: '/img', files: ['**/*.svg','**/*.png','**/*.jpg','**/*.gif']
  })
];



/** Export */
module.exports = app.toTree(assets);

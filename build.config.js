/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

    build_dir: 'build',
    prod_dir: 'dist',
    compile_dir: 'bin',
  
    app_files: {
      js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
      jsunit: ['src/**/*.spec.js'],
  
      atpl: ['src/app/**/*.tpl.html'],
      ctpl: ['src/common/**/*.tpl.html'],
  
      html: ['src/index.html'],
  
      scss: 'src/scss/main.scss'
    },
  
    test_files: {
      js: [
        'node_modules/angular-mocks/angular-mocks.js'
      ]
    },
  
    vendor_files: {
      js: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/tinymce/tinymce.min.js',
        'node_modules/tinymce/plugins/lists/plugin.min.js',
        'node_modules/tinymce/themes/modern/theme.min.js',
        'node_modules/angular-ui-tinymce/dist/tinymce.min.js',
        'node_modules/tinymce/plugins/table/plugin.min.js',
        'node_modules/tinymce/plugins/image/plugin.min.js',
        'node_modules/tinymce/plugins/textcolor/plugin.min.js',
        'node_modules/tinymce/plugins/fullscreen/plugin.min.js',
        'node_modules/tinymce/plugins/code/plugin.min.js',
        'node_modules/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js',
        'node_modules/ui-select/dist/select.min.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
        'node_modules/angular-recaptcha/release/angular-recaptcha.min.js',
        'node_modules/moment/min/moment.min.js',
        'node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js',
        'node_modules/angular-ui-notification/dist/angular-ui-notification.min.js',
        'node_modules/satellizer/dist/satellizer.min.js',
        'node_modules/oclazyload/dist/ocLazyLoad.min.js',
        // 'node_modules/pdfjs-dist/index-test.js'
      ],
      js_separate: [
        'node_modules/pdfjs-dist/build/pdf.min.js',
        'node_modules/pdfjs-dist/build/pdf.worker.min.js'
      ],
      css: [
        'node_modules/ui-select/dist/select.min.css',
        'node_modules/angular-ui-notification/dist/angular-ui-notification.min.css',
      ],
      assets: []
    }
  };
  
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcss_import = require('postcss-import');
var postcss_calc = require('postcss-calc');
var postcss_custom_properties = require('postcss-custom-properties');
var postcss_color_function = require('postcss-color-function');
var postcss_each = require('postcss-each');
var postcss_reporter = require('postcss-reporter');
var autoprefixer = require('autoprefixer');

var PLI = require('superfly-css-pli');

var processors = [postcss_import, postcss_each, postcss_custom_properties, postcss_calc, postcss_color_function, autoprefixer, postcss_reporter({
  clearMessages: true
})];

gulp.task('build:css', function() {
  gulp.src(PLI.SRC_MAIN_CSS)
    .pipe(postcss(processors))
    .pipe(gulp.dest(PLI.target.main.css));

  return gulp.src(PLI.SRC_TEST_CSS)
    .pipe(postcss(processors))
    .pipe(gulp.dest(PLI.target.test.css));
});

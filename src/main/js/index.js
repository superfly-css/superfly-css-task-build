var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcss_import = require('postcss-import');
var postcss_calc = require('postcss-calc');
var postcss_custom_properties = require('postcss-custom-properties');
var postcss_color_function = require('postcss-color-function');
var autoprefixer = require('autoprefixer');

var PLI = require('superfly-css-pli');

var processors = [postcss_import, autoprefixer, postcss_calc, postcss_custom_properties, postcss_color_function];

gulp.task('build:css', function() {
  return gulp.src(PLI.SRC_MAIN_CSS)
    .pipe(postcss(processors))
    .pipe(gulp.dest(PLI.target.main.css));
});

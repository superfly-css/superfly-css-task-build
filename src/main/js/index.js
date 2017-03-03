var gulp = require('gulp');
var pc = require('gulp-postcss');
var pc_import = require('postcss-import');
var pc_calc = require('postcss-calc');
var pc_custom_properties = require('postcss-custom-properties');
var pc_color_function = require('postcss-color-function');
var pc_each = require('postcss-each');
var pc_apply = require('postcss-apply');
var pc_reporter = require('postcss-reporter');
var pc_custom_media = require('postcss-custom-media');
var autoprefixer = require('autoprefixer');

var PLI = require('superfly-css-pli');

var processors = [pc_import, pc_each, pc_custom_properties, pc_apply, pc_calc, pc_color_function, pc_custom_media, autoprefixer, pc_reporter({
  clearMessages: true
})];

gulp.task('build:css', function() {
  gulp.src(PLI.SRC_MAIN_CSS)
    .pipe(pc(processors))
    .pipe(gulp.dest(PLI.target.main.css));

  return gulp.src(PLI.SRC_TEST_CSS)
    .pipe(pc(processors))
    .pipe(gulp.dest(PLI.target.test.css));
});

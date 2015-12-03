var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcss_import = require('postcss-import');
var postcss_calc = require('postcss-calc');
var postcss_custom_properties = require('postcss-custom-properties');
var postcss_color_function = require('postcss-color-function');
var postcss_each = require('postcss-each');
var postcss_reporter = require('postcss-reporter');
var autoprefixer = require('autoprefixer');
var stylelint = require('stylelint');

var PLI = require('superfly-css-pli');

// Stylelint configuration
var stylelintConfig = {
  "rules": {
    "block-no-empty": 2,
    "color-no-invalid-hex": 2,
    "declaration-colon-space-after": [2, "always"],
    "declaration-colon-space-before": [2, "never"],
    "function-comma-space-after": [2, "always"],
    "function-url-quotes": [2, "double"],
    "media-feature-colon-space-after": [2, "always"],
    "media-feature-colon-space-before": [2, "never"],
    "media-feature-name-no-vendor-prefix": 2,
    "no-multiple-empty-lines": 2,
    "number-leading-zero": [2, "always"],
    "property-no-vendor-prefix": 2,
    "rule-no-duplicate-properties": 2,
    "rule-trailing-semicolon": [2, "always"],
    "selector-no-id": 2,
    "string-quotes": [2, "double"],
    "value-no-vendor-prefix": 2
  }
};

var processors = [stylelint(stylelintConfig), postcss_import, postcss_each, autoprefixer, postcss_custom_properties, postcss_calc, postcss_color_function, postcss_reporter({
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

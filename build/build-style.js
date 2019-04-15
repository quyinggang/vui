'use strict'

var path = require('path');
var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var config = require('./env-config');

gulp.task('compile', function() {
  return gulp.src('../packages/themes/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false }
    ))
    .pipe(cssmin())
    .pipe(gulp.dest(path.resolve(__dirname, config.build.assetsRoot + '/themes')));
});

gulp.task('build', gulp.series('compile'));

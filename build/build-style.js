'use strict'

var path = require('path');
var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var config = require('./env-config');

gulp.task('compile', function() {
  return gulp.src('../packages/themes/index.scss')
    .pipe(sass.sync())
    // 浏览器前缀兼容处理
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    // css压缩
    .pipe(cssmin())
    // 输出目录
    .pipe(gulp.dest(path.resolve(__dirname, config.build.assetsRoot)));
});

// gulp 4.0使用gulp.series
gulp.task('build', gulp.series('compile'));

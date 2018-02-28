'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('scripts', function() {
  return gulp.src([
    './../js/custom-contact-form.js'
    ])
    .pipe(minify())
    .pipe(gulp.dest('./../dist/'));
});

gulp.task('default', function() {
  gulp.watch('./../js/**/*.js', ['scripts'])
});

'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var paths = {
  libsStyles: [
    'assets/css/animate.css',
    'assets/css/bootstrap.css',
    'assets/css/font-awesome.css'
  ],
  styles: [
    'assets/css/style.css'
  ],
  libsScripts: [
    'assets/js/jquery.js',
    'assets/js/bootstrap.js'
  ],
  scripts: [
    'assets/js/validation.js'
  ]
}

gulp.task('clean', function() {
  return gulp.src('build', {read: false, allowEmpty: true})
    .pipe(clean())
})

gulp.task('clean-styles', function() {
  return gulp.src('build/css', {read: false, allowEmpty: true})
    .pipe(clean())
})

gulp.task('clean-scripts', function() {
  return gulp.src('build/js', {read: false, allowEmpty: true})
    .pipe(clean())
})

gulp.task('libs-styles', function() {
  return gulp.src(paths.libsStyles)
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('build/css/'))
});

gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(concat('app.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('build/css/'))
});

gulp.task('libs-scripts', function() {
  return gulp.src(paths.libsScripts)
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
});
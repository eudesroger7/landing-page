'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var watch = require('gulp-watch');

var paths = {
  libsStyles: [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/font-awesome/css/font-awesome.css'
  ],
  styles: [
    'assets/css/style.css'
  ],
  libsScripts: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-validation/dist/jquery.validate.js',
    'node_modules/bootstrap/dist/js/bootstrap.js'
  ],
  scripts: [
    'assets/js/validation.js'
  ],
  fonts: [
    'node_modules/font-awesome/fonts/*'
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

gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('build/fonts/'))
})
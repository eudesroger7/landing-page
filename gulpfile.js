'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

var paths = {
  libsStyles: [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/toastr/build/toastr.css'
  ],
  styles: [
    'assets/css/style.css'
  ],
  libsScripts: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/toastr/toastr.js'
  ],
  scripts: [
    'assets/js/initialize.js',
    'assets/js/validation.js'
  ],
  fonts: [
    'node_modules/font-awesome/fonts/*'
  ],
  htmls: [
    'index.html'
  ],
  images: [
    'assets/img/*'
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
});

gulp.task('htmls', function() {
  return gulp.src(paths.htmls)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'))
});

gulp.task('images', function(){
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'))
});

gulp.task('watch', function(){
  gulp.watch(paths.styles, gulp.series('styles'));
  gulp.watch(paths.scripts, gulp.series('scripts'));
  gulp.watch(paths.htmls, gulp.series('htmls'));
});

gulp.task('default', gulp.series('clean', 'libs-styles', 'styles', 'libs-scripts', 'scripts', 'fonts', 'htmls', 'images'));
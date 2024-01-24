const {src, dest} = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function defaultTask() {}

function htmlTask() {
  return src('src/*.html')
    .pipe(fileinclude({prefix: '@@'}))
    .pipe(dest('dist'));
}

function stylesTask() {
  return src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'));
}

function jsTask() {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'));
}

exports.htmlTask = htmlTask;
exports.stylesTask = stylesTask;
exports.jsTask = jsTask;

exports.default = defaultTask;
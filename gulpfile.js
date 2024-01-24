const {src, dest} = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));

function defaultTask() {

}

function htmlTask() {
    return src('src/*.html')
        .pipe(fileinclude({prefix: '@@'}))
        .pipe(dest('dist'));
}

function stylesTask() {
    return src('src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('dist/css'));
}

exports.htmlTask = htmlTask;
exports.default = defaultTask;
exports.stylesTask = stylesTask;

const {src, dest} = require('gulp');
const fileinclude = require('gulp-file-include');

function defaultTask() {

}

function htmlTask() {
    return src('src/*.html')
        .pipe(fileinclude({prefix: '@@'}))
        .pipe(dest('dist'));
}

exports.htmlTask = htmlTask;
exports.default = defaultTask;

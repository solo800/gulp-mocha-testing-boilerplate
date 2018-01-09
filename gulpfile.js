const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('process:javascript-tests', () => {
    gulp.src('test.js', {read: false})
        .pipe(mocha({recursive: true}));
});

gulp.task('default', ['process:javascript-tests']);
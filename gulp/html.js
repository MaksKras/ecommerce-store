var fileinclude = require('gulp-file-include');
var connect = require('gulp-connect');
var gulp = require('gulp');
 
gulp.task('html', function() {
  gulp.src(['source/html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

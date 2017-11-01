var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  return connect.server({
    root: 'build',
    port: '3000',
    livereload: true
  });
});

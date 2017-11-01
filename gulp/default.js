var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
    return gulp.start('watch', 'connect', 'html', 'bower', 'copy', 'sprite', 'stylus', 'javascript', 'ttf2woff');
});

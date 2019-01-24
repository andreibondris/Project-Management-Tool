let gulp = require('gulp');
let connect = require('gulp-connect');

gulp.task('webserver', () => {
    connect.server({
        port: 3000,
        livereload: true    
    });
});

gulp.task('default', ['webserver']);

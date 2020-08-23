var gulp      = require('gulp'),
    CleanCSS  = require('clean-css'),
    refresh   = require('gulp-livereload'),
    server    = require('tiny-lr')();
    imagemin  = require('gulp-imagemin');

const { series } = require('gulp')
gulp.task('directories', function () {
  return gulp.src('*.*', {read: false})
    .pipe(gulp.dest('.dist'))
});

//pipe the modules from gulp in styles.css
gulp.task('update', function() {
  gulp.src('src/style.css')
  .pipe(clean-css())
  .pipe(gulp.dest('dist'))
  .pipe(refresh(server))
});

//refresh server on changes
gulp.task('watch', function() {
    server.listen(35729, function( err ) {
        if ( err ) { return console.log( err ); }

        gulp.watch('src/style.css', [
            'update'
        ]);
    });
});

//optmize images
exports.default = () => (
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

exports.default = series(directories);

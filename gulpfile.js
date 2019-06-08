var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', gulp.series(done => {
  gulp.watch('./scss/*.scss', gulp.series('sass'));
  done();
}));

gulp.task('sass', gulp.series(done => {
  gulp.src('./scss/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('css'));
  done();
}));

gulp.task('default', gulp.series(['watch']));
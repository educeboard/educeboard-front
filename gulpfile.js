var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function() {

  return gulp.watch('./scss/*.scss', function(event) {
    gulp.src('./scss/*.scss')
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('css'));
  });
});

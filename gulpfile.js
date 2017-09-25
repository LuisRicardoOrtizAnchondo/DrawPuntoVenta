var gulp = require('gulp');

gulp.task('css', function(){
  return gulp.src('bower_components/bootstrap/dist/css/*')
  .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('js', function(){
  return gulp.src('bower_components/bootstrap/dist/js/*')
  .pipe(gulp.dest('public/javascripts'))
});



gulp.task('default', [ 'css', 'js' ]);

var gulp = require('gulp');

gulp.task('css', function(){
  return gulp.src('bower_components/bootstrap/dist/css/*')
  .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('font-awesome', function(){
  return gulp.src('bower_components/components-font-awesome/css/*')
  .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('jquery', function(){
  return gulp.src('bower_components/bootstrap/dist/js/*')
  .pipe(gulp.dest('public/javascripts'))
});

gulp.task('bootstrap', function(){
  return gulp.src('bower_components/jquery/dist/*')
  .pipe(gulp.dest('public/javascripts'))
});

gulp.task('popper', function(){
  return gulp.src('bower_components/popper.js/dist/umd/*')
  .pipe(gulp.dest('public/javascripts'))
});



gulp.task('default', [ 'css','font-awesome', 'jquery', 'bootstrap', 'popper' ]);

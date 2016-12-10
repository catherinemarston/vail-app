var gulp = require('gulp');
var sass = require('gulp-sass');
var path = {
  sassSrc: './public/scss/styles.scss',
  cssSrc: './public/css'
}


gulp.task('styles', function(){
  gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'));
});


gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});

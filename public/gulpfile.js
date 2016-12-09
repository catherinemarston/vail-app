var gulp = require('gulp');
var sass = require('gulp-sass');
var path = {
  sassSrc: './public/scss/styles.scss',
  cssSrc: './public/css'
}


//gulp style task

// gulp.task('sass', function() {
//     gulp.src(path.sassSrc)
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest(path.cssSrc));
// });
gulp.task('styles', function(){
  gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'));
});

//gulp watch function

// gulp.task('default', function(){
//   gulp.watch(path.sassSrc + '/**/*.scss', ['sass']);
// });

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

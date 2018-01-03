var gulp = require('gulp'),
 watch = require('gulp-watch'),
 cleanCSS = require('gulp-clean-css'),
 uglify = require('gulp-uglify'),
 rename = require('gulp-rename'),
 concat = require('gulp-concat'),
 merge = require('merge-stream'),
 scss = require('gulp-scss');

//gulp.task('default', defaultTask);

function version(dateIn){
  var now = new Date(),
    Y = now.getFullYear(),
    m = now.getMonth()+1,
    d = now.getDate(),
    H = now.getHours(),
    i = now.getMinutes(),
    s = now.getSeconds();

    if (H < 10) {
      H = '0' + H;
    }

    if (i < 10) {
      i = '0' + i;
    }

    if (s < 10) {
      s = '0' + s;
    }

    return String(10000*Y + 100*m + d + '.' + H + i + s);
}
gulp.task('default', ['watch']);
//gulp.task('default', ['build-js', 'build-css']);

gulp.task('build-css', function(){
  var full = gulp.src([
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'src/scss/main.scss'
  ])
  .pipe(scss())
  .pipe(concat('default.css'))
  .pipe(gulp.dest('dist/css'));

  var min = gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'src/scss/main.scss'
  ])
  .pipe(scss())
  .pipe(cleanCSS())
  .pipe(concat('default.min.' + version() + '.css'))
  .pipe(gulp.dest('dist/css'));

  return merge(full, min);

});

gulp.task('build-js', function(){
  var full = gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/main.js'
  ])
  .pipe(concat('.js'))
  .pipe(gulp.dest('dist/js'));

  var min = gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/main.js'
  ])
  .pipe(concat('.min.' + version() + '.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));

  return merge(full, min);
});

gulp.task('watch', function(){
  gulp.watch('./src/js/**/*.js', ['build-js']);
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
});

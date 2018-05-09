const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');

gulp.task('vet', function() {
  return gulp
    .src([
      './src/**/*.js',
      './*.js'
    ])
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

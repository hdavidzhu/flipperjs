// IMPORTS =====================================================================

var gulp        = require('gulp');
var ts          = require('gulp-typescript');
var mocha       = require('gulp-mocha');
var tsConfig    = require('./tsconfig.json').compilerOptions;
var srcGlob     = 'src/**/*.ts';



// TASKS =======================================================================

gulp.task('typescript', function() {
  return gulp.src(srcGlob)
    .pipe(ts(tsConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('typescript:tdd', function() {
  gulp.watch(srcGlob, ['typescript']);
});

gulp.task('test', function() {
  return gulp
    .src('spec/**/*.js', {read: false})
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('test:tdd', function() {
  gulp.watch(srcGlob, ['test']);
});



// GROUPS ======================================================================

gulp.task('build'  , ['typescript', 'test']);
gulp.task('default', ['build', 'typescript:tdd', 'test:tdd']);

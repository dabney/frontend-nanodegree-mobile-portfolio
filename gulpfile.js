var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('uglify', function () {
   gulp.src('views/js/main.js')
      .pipe(uglify())
      .pipe(gulp.dest('views/js/main.min.js'))
});
/*
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),

gulp.task('js', function () {
   return gulp.src(['js/perfmatters.js', 'views/js/main.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'));
});

var gulp = require('gulp'),
        minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src('./static/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'))
});

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build'));
});
*/
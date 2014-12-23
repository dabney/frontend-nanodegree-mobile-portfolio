var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin');
  uncss = require('gulp-uncss');
  webp = require('gulp-webp');

gulp.task('uglifypizza', function () {
   gulp.src('views/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/views/js'))
});
gulp.task('uncsspizzabootstrap', function () {
   return gulp.src('views/css/bootstrap-grid.css')
      .pipe(uncss({
      	html: ['views/pizza.html']
      }))
      .pipe(gulp.dest('build/views/css'))
});
// ended up inlining, so did not use minified css for pizza
gulp.task('minifypizza', function () {
   gulp.src('views/css/*.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('build/views/css'))
});
gulp.task('uglifyprimary', function () {
   gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))
});
gulp.task('minifyprimary', function () {
   gulp.src('css/*.css')
      .pipe(minifyCSS())
      .pipe(gulp.dest('build/css'))
});

// I already used Photoshop to reduce the images but will push them through imagemin anyway
gulp.task('imageminprimary', function () {
   gulp.src(['img/2048.png', 'img/mobilewebdev.jpg', 'img/cam_be_like.jpg', 'img/profilepic.jpg'])
      .pipe(imagemin())
      .pipe(gulp.dest('build/img'))
});

// Push the pizza page images through imagemin.  I already used Photoshop to reduce these images
//  and to create the pizzeria_as_icon image
gulp.task('imageminpizza', function () {
   gulp.src(['views/images/pizzeria_as_icon.jpg', 'views/images/pizza.png', 'views/images/pizza77X100.png', 'views/images/pizzeria.jpg'])
      .pipe(imagemin())
      .pipe(gulp.dest('build/views/images'))
});

// I already used Photoshop to reduce the images but will push them through imagemin anyway
gulp.task('webpprimary', function () {
   return gulp.src(['img/2048.png', 'img/mobilewebdev.jpg', 'img/cam_be_like.jpg', 'img/profilepic.jpg'])
      .pipe(webp())
      .pipe(gulp.dest('build/img'))
});

// Push the pizza page images through imagemin.  I already used Photoshop to reduce these images
//  and to create the pizzeria_as_icon image
gulp.task('webppizza', function () {
   return gulp.src(['views/images/pizzeria_as_icon.jpg', 'views/images/pizza.png', 'views/images/pizza77X100.png', 'views/images/pizzeria.jpg'])
      .pipe(webp())
      .pipe(gulp.dest('build/views/images'))
});

// Process the HTML files in the primary directory and put them in the build directory
// Currently no processing is done but may add prettify task in the future
gulp.task('processhtmlprimary', function () {
   gulp.src('*.html')
      .pipe(gulp.dest('build'))
});

// Process the HTML files in the pizza (views) directory and put them in the build directory
// Currently no processing is done but may add prettify task in the future
gulp.task('processhtmlpizza', function () {
   gulp.src('views/pizza.html')
      .pipe(gulp.dest('build/views'))
});

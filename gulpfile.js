var gulp = require('gulp');
var sass = require('gulp-sass'); // compiles SASS
var browserSync = require('browser-sync'); //live reload of changes while coding
var useref = require('gulp-useref'); //concat files
var uglify = require('gulp-uglify'); //minifies javascript
var gulpIf = require('gulp-if'); // conditionally minifies
var autoprefixer = require('gulp-autoprefixer'); // auto prefixes all the things
var cssnano = require('gulp-cssnano'); // minifies css
var imagemin = require('gulp-imagemin'); // optimises images
var cache = require('gulp-cache'); // dont reoptimise images if theyve been done
var del = require('del'); // cleans up distribution file
var runSequence = require('run-sequence'); // allows task running in an order
var cat  = require('gulp-cat'); // runs ascii art greeting on "gulp"

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dev'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('dev/scss/**/*.scss') // pulls the .scss files
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('dev/css')) // compiles and outputs css
    .pipe(browserSync.reload({ // Reloads Browser Sync
      stream: true
    }));
})

gulp.task('autoprefix', () =>
gulp.src('dev/css/**/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dev/css'))
);

// Watchers
gulp.task('watch', function() {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/*.html', browserSync.reload);
  gulp.watch('dev/js/**/*.js', browserSync.reload);
})

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('dev/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function() {
  return gulp.src('dev/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('dev/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['greetings', 'sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    'autoprefix',
    ['useref', 'images', 'fonts'],
    callback
  )
})

/////////////////////////////////misc tasks
gulp.task('greetings', function() {
    return gulp.src('./greeting.txt')
        .pipe(cat());
});
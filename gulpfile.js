/**************************************
*
*   REQUIRE
*
***************************************/
gulp = require('gulp');

// Utilities
data = require('gulp-data');

// HTML
jade = require('gulp-jade');

// CSS
stylus = require('gulp-stylus');

// Optimization
//imagemin = require('gulp-imagemin');
//minify = require('gulp-minify');
//uglify = require('gulp-uglify');

// Webserver
webserver = require('gulp-webserver');


/**************************************
*
*   PATHS
*
***************************************/
paths = {
    app:       'app',
    dist:      'dist',
    jade:      'app/views/*.jade',
    index:     'dist/*.html',
    stylus:    'app/static/styles/layouts/*.styl',
    css:       'dist/static/styles/',
    imageSrc:  'app/static/img/**/*',
    imageDist: 'dist/static/img/',
    fontSrc:   'app/static/fonts/**/*',
    fontDist:  'dist/static/fonts/',
    jsSrc:     'app/static/js/**/*',
    jsDist:    'dist/static/js/'
}


/**************************************
*
*   TASKS
*
***************************************/

// Jade task
gulp.task('jade',function(){
    gulp.src(paths.jade)
        .pipe(jade({
            pretty: true
            }
        ))
        .pipe(gulp.dest(paths.dist));
});


// Stylus task
gulp.task('stylus',function(){
    gulp.src(paths.stylus)
        .pipe(stylus())
        .pipe(gulp.dest(paths.css))
});

// Img task
gulp.task('copy-img',function(){
    gulp.src(paths.imageSrc)
        .pipe(gulp.dest(paths.imageDist))
});

// Fonts task
gulp.task('copy-fonts',function(){
    gulp.src(paths.fontSrc)
        .pipe(gulp.dest(paths.fontDist))
});

// JS client task
gulp.task('copy-js',function(){
    gulp.src(paths.jsSrc)
        .pipe(gulp.dest(paths.jsDist))
});

// Watch task
gulp.task('watch',function(){
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('webserver',function(){
    gulp.src(paths.dist)
        .pipe(webserver({
            port: 9000,
            livereload: true
        }));
});

// Default task
gulp.task('default',[
    'jade',
    'stylus',
    'copy-js',
    'copy-img',
    'copy-fonts',
    'webserver',
    'watch'
]);

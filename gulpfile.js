var gulp = require('gulp'),
    
    //js related
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    
    //error control
    plumber = require('gulp-plumber');

var projectName = './lib';


// js compress
gulp.task('jsCompress', function () {
    gulp.src([
         projectName + '/keycodex.js'
        ])
        .pipe(concat('keycodex.min.js'))
        .pipe(uglify())
        .pipe(plumber())
        .pipe(gulp.dest(projectName + '/'));
});


/* Watch for changes */
/* Generic */
gulp.task('watch',function(){
	gulp.watch(projectName + '/keycodex.js',['jsCompress']);
});


/* Default Gulp task */
/* type Gulp in console */
gulp.task('default', ['jsCompress','watch']);


'use strict';

var gulp      = require('gulp'),
    //argv = require('yargs').argv,
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    sass      = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    //gulpif = require('gulp-if'),
    bower = require('gulp-bower');
    //bust =  require('gulp-buster');

//source and destination directories
var paths = {
    jsScripts:{
        input: [
            "resources/assets/js/*.js",
            "resources/assets/js/**/*.js"
        ],
        output: "www/js"
    },

    sassScripts :{
        input: [
            "resources/assets/sass/*.scss",
            "resources/assets/sass/**/*.scss"
           ],
        output: "www/css"
    }
    };


// Lint task
gulp.task('lint', function(){
    return gulp.src(paths.jsScripts.input)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));

});

// Concat & minify JS
gulp.task('scripts', function(){
    return gulp.src(paths.jsScripts.input)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsScripts.output));

});

//Compile sass
gulp.task('sass', function(){

    //if( argv.sourcemaps )
    //{ console.log('Generating Sourcemaps...'); }

    return gulp.src(paths.sassScripts.input)
        .pipe(sourcemaps.init())
        .pipe(sass())
        //.pipe(bust())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.sassScripts.output))
});

//update bower packages
gulp.task('bower', function(){
    return bower();
});

// Watch files for changes
gulp.task('watch', function(){
    gulp.watch(paths.jsScripts.input, ['scripts']);
    gulp.watch(paths.sassScripts.input, ['sass']);
});

//default task
gulp.task('default', function(){
    gulp.start(
        'watch',
        'sass',
        'scripts',
        'bower'
    );

});





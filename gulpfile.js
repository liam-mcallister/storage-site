// Require gulp
const gulp = require('gulp');
// Require gulp concat plugin
const concat = require('gulp-concat');
// Require gulp rename plugin
const rename = require('gulp-rename');
// Require gulp minify css plugin
const cleanCss = require('gulp-clean-css');
// Require gulp terser plugin
const terser = require('gulp-terser');

// Function that takes the reset.css and styles.css files
// + merges both files into one file
// + creates a file called styles.min.css
// + minifies the file
// + saves it in the build folder
const packCss = () => {
    return gulp.src([
        'src/styles/css/reset.css',
        'src/styles/css/styles.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCss({ compatibility: "ie8" }))
        .pipe(gulp.dest('build/styles'));
};

// Function that takes the app.js file
// + creates a file called app.min.js
// + minifies the file
// + saves it in the build folder
const packJs = () => {
    return gulp.src([
        'src/scripts/app.js'
    ])
        .pipe(rename({ suffix: '.min' }))
        .pipe(terser())
        .pipe(gulp.dest('build/scripts'));
};

// Function that takes the validate.js file
// + creates a file called validate.min.js
// + minifies the file
// + saves it in the build folder
const packValidateJs = () => {
    return gulp.src([
        'src/scripts/validate.js'
    ])
        .pipe(rename({ suffix: '.min' }))
        .pipe(terser())
        .pipe(gulp.dest('build/scripts'));
};

// Creates a task which runs both the supplied functions together in one
gulp.task('default', gulp.series(packCss, packJs, packValidateJs));
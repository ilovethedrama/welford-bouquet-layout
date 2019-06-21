'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

var test = async () => {
    console.log(
        `
    sup 
    sup 
    sup
    `);
}
test.description = 'test to make sure gulp works';

var scssToCss = () => {
    return gulp.src('./app/scss/welStyle.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/css'))
}

scssToCss.description = 'changes scss to css and adds autoprefixes for browser support';



gulp.task('default', gulp.series(test, scssToCss));
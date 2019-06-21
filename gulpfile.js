"use strict";

const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoPrefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync").create(),
  plumber = require("gulp-plumber");

var test = async () => {
  console.log(
    `
    sup 
    sup 
    sup
    `
  );
};
test.description = "test to make sure gulp works";

var scssToCss = () => {
  return gulp
    .src("./app/scss/welStyle.scss")
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(gulp.dest("./app/css"))
    .pipe(
      browserSync.stream({
        match: "**/*.css"
      })
    );
};

scssToCss.description =
  "changes scss to css and adds autoprefixes for browser support";

var bSync = done => {
  browserSync.init({
    server: {
      baseDir: "./app"
    },
    port: 3000
  });
  // gulp.watch("app/scss/*.scss"),
  //     gulp.watch("app/*.html").on('change', browserSync.reload);
  done();
};

bSync.description = "allows for live browser view of file as changes are made";

var watcher = () => {
  gulp.watch("app/scss/*.scss").on("change", scssToCss);
  gulp.watch("app/*.html").on("change", browserSync.reload);
};

gulp.task("default", gulp.parallel(bSync, watcher));
// gulp.task('default', gulp.parallel(bSync, watcher), gulp.series(test, scssToCss));

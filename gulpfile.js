/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";

var gulp = require("gulp");
var paths = {
    webroot: "./wwwroot/"
};
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "lib-npm/";

gulp.task("copy-systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', {
        base: paths.npmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copy-angular2", function () {
    return gulp.src(paths.npmSrc + '/angular2/bundles/**/*.js', {
        base: paths.npmSrc + '/angular2/bundles/'
    }).pipe(gulp.dest(paths.npmLibs + '/angular2/'));
});

gulp.task("copy-es6-shim", function () {
    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', {
        base: paths.npmSrc + '/es6-shim/'
    }).pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});

gulp.task("copy-rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*', {
        base: paths.npmSrc + '/rxjs/bundles/'
    }).pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-all", ["copy-rxjs", 'copy-angular2', 'copy-systemjs', 'copy-es6-shim']);
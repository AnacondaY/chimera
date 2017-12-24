#!/usr/bin/env node

const gulp = require('gulp');
const sass = require('gulp-sass');
//const babel = require('gulp-babel');
const rename = require('gulp-rename');
const path = require('path');

const componentDir = path.resolve(process.cwd(), 'src/components');

gulp
    .src('**/style/index.scss', { base: componentDir })
    .pipe(sass().on('error', sass.logError))
    .pipe(rename(function(path){
        path.dirname += '/css';
    }))
    .pipe(gulp.dest('./lib', {
        cwd: process.cwd()
    }));
'use strict';

const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const cleanCSS = require('gulp-clean-css');

const paths = {
  styles: {
    src: './packages/theme-ideal/*.scss',
    dest: './lib/theme-ideal'
  },
  fonts: {
    src: './packages/theme-ideal/fonts/**',
    dest: './lib/fonts'
  }
};
function styles() {
  return src(paths.styles.src)
    .pipe(sass.sync())
    .pipe(cleanCSS())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(dest(paths.styles.dest));
}

function copyfont() {
  return src(paths.fonts.src)
    .pipe(cssmin())
    .pipe(dest(paths.fonts.dest));
}
function watchScss() {
  watch(paths.styles.src, styles);
  watch(paths.fonts.src, copyfont);
}
exports.build = series(styles, copyfont);
exports.watch = watchScss;

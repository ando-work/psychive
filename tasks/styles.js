import gulp from 'gulp';
import gulpIf from 'gulp-if';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleancss from 'gulp-clean-css';
import plumber from 'gulp-plumber';
import gulpStylelint from 'gulp-stylelint';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'gulp-autoprefixer';
import changed from 'gulp-changed-in-place';

import { sass as config, isDev, isProd } from './config';

/**
 * SCSS -> CSS
 */
export function sass() {
  return gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(cleancss())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.dest));
}

/**
 * Stylelint
 */
export function stylelint() {
  return gulp
    .src(config.src)
    .pipe(changed({ firstPass: true }))
    .pipe(gulpStylelint({
      failAfterError: isProd,
      reporters: [{ formatter: 'verbose', console: true }],
      syntax: 'scss'
    }));
}

export const styles = gulp.series(sass);

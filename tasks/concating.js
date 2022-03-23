import gulp from 'gulp';
import concat from 'gulp-concat';

import { concating as config, isProd } from './config';

var files = config.vendor;

export function concatJs() {
  return gulp
  .src(files)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.dest));
}

export const concating = gulp.series(concatJs);

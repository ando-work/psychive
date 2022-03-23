import gulp from 'gulp';
import gulpIf from 'gulp-if';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';

import { images as config, isProd } from './config';

export function images() {
  return gulp
    .src(config.src)
    // .pipe(gulpIf(isProd, imagemin([
    //      pngquant({
    //        quality: [.7, .85],
    //        speed: 1,
    //        floyd:0
    //      }),
    //      mozjpeg({
    //        quality: 85,
    //        progressive: true
    //      }),
    //      imagemin.svgo(),
    //      imagemin.optipng()
    //    ]
    // )))
    .pipe(gulp.dest(config.dest));
}

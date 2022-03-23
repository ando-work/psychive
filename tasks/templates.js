import gulp from 'gulp';
import gulpIf from 'gulp-if';
import edge from 'edge.js';
import tap from 'gulp-tap';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

import { templates as config, isProd } from './config';

/**
 * Edge.js -> HTML
 */
export function templates() {
  // テンプレートを読み込む
  edge.registerViews(path.join(__dirname, `../${config.root}`));

  // データファイルを読み込む
  const data = fs.existsSync(config.data) ?
    JSON.parse(fs.readFileSync(config.data, 'utf8')) : {};

  // ヘルパー関数を読み込む
  fs.existsSync(config.helpers) && require(`../${config.helper}`);

  // ハッシュ定義
  const hash = crypto.randomBytes(8).toString('hex');

  return gulp
    .src(config.pages)
    .pipe(
      tap(file => {
        const contents = edge.renderString(String(file.contents), data);
        file.contents = new Buffer.from(contents);
      })
    )
    .pipe(gulpIf(isProd, htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulpIf(isProd, replace('style.css"', 'style.css?' + hash + '"')))
    .pipe(gulpIf(isProd, replace('.js"', '.js?' + hash + '"')))
    .pipe(gulpIf(isProd, replace('.jpg"', '.jpg?' + hash + '"')))
    .pipe(gulpIf(isProd, replace('.png"', '.png?' + hash + '"')))
    .pipe(gulpIf(isProd, replace('.svg"', '.svg?' + hash + '"')))
    .pipe(gulp.dest(config.dest));
}

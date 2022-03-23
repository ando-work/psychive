const ASSET_ROOT = 'src';
const DEST_ROOT = 'public';

export const sass = {
  src: `${ASSET_ROOT}/assets/scss/**/*.scss`,
  dest: `${DEST_ROOT}/assets/css`
};

export const concating = {
  vendor:[
   `${ASSET_ROOT}/assets/js/vendor/*`,
   `!${ASSET_ROOT}/js/vendor/_*`
  ],
  dest: `${DEST_ROOT}/assets/js`
};

export const scripts = {
  srcRoot: `${ASSET_ROOT}/assets/js`,
  src: `${ASSET_ROOT}/assets/js/**/*.js`,
  dest: `${DEST_ROOT}/assets/js`,
  babelrc: {
    presets: [['@babel/env', { targets: '> 0.25%, not dead' }]]
  }
};

export const templates = {
  root: `${ASSET_ROOT}/templates`,
  edges: `${ASSET_ROOT}/templates/**/*.edge`,
  pages: `${ASSET_ROOT}/templates/pages/**/*.edge`,
  data: `${ASSET_ROOT}/templates/data.json`,
  helper: `${ASSET_ROOT}/templates/helper.js`,
  dest: DEST_ROOT
};

export const images = {
  src: `${ASSET_ROOT}/assets/img/**/*.*`,
  dest: `${DEST_ROOT}/assets/img`
};

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

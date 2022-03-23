import { scripts as config } from './tasks/config';

module.exports = {
  mode: process.env.NODE_ENV ? 'production' : 'development',
  entry: {
    app: `./${config.srcRoot}/app.js`
  },
  module: {
    rules: [{
      // 拡張子 .js の場合
      test: /\.js$/,
      use: [{
        // Babel を利用する
        loader: 'babel-loader',
        // Babel のオプションを指定する
        options: {
          presets: [
            // プリセットを指定することで、ES2018 を ES5 に変換
            '@babel/preset-env',
          ]
        }
      }]
    }]
  },
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map'
}

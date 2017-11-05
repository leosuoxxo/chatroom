const commonConfig = require('./webpack.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const devConfig = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/app.js')
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' }
      ]
    }, {
      test: /\.(scss|sass)$/,
      loader: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' }
      ]
    }]
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    inline: true,
    port: 8000,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge({
  customizeArray(a, b, key) {
    /* entry.app不合并，全替换 */
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);

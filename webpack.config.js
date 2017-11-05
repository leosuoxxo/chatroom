const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  // entry: {
  //   app: ['babel-polyfill', path.join(__dirname, 'src/app.js')],
  //   vendor: ['react', 'react-router-dom', 'react-dom']
  // },
  // output: {
  //   path: path.join(__dirname, './dist'),
  //   filename: '[name].[chunkhash].js',
  //   chunkFilename: '[name].[hash].js',
  //   publicPath: '/'
  // },
  resolve: {
    alias: {
      assets: path.join(__dirname, 'src/assets'),
      containers: path.join(__dirname, 'src/containers'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    },
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader', 'eslint-loader'],
      include: path.join(__dirname, '/'),
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]

    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
    // new webpack.HotModuleReplacementPlugin()
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vendor', 'manifest'],
    //   minChunks: Infinity
    // })
  ]
};


module.exports = commonConfig;

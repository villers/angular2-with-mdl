/**
 * Import modules
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Module export for Webpack
 */
module.exports = {

  entry: {
    'vendor': './src/vendor.ts',
    'bootstrap': './src/bootstrap.ts'
  },

  output: {
    path: './src',
    filename: '[name].bundle.js'
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HtmlWebpackPlugin({
      env: 'development',
      template: './src/index.html',
      inject: false
    })
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.css']
  },

  module: {
    preLoaders: [
      { test: /\.ts$/, loader: "tslint" }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(ttf|eot|svg|woff(2)?).*$/, loader: "file-loader" },
      { test: /\.(png|jpg|jp(e)?g)$/, loader: "url-loader?limit=1000" }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },

  // Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    contentBase: './src'
  }
};

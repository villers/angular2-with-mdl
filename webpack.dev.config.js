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

  debug: true,

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HtmlWebpackPlugin({
      env: 'development',
      template: './src/index.html',
      inject: false
    })
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },

  module: {
    preLoaders: [
      { test: /\.ts$/, loader: "tslint", exclude: [/node_modules/] }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/,  loader: 'json-loader' },
      { test: /\.scss$/, loader: "style-loader!raw-loader!sass-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(ttf|eot|svg|woff(2)?).*$/, loader: "file-loader?name=fonts/[name].[ext]" }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },

  // Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    contentBase: './src'
  }
};

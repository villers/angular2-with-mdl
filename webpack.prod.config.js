/**
 * Import modules
 */
var webpack = require('webpack');
var fs = require('fs');
var WebpackOnBuildPlugin = require('on-build-webpack');
var AppCachePlugin = require('appcache-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Initialization
 */
var BUILD_DIR = './build/';
var BUILD_FILES = [];

/**
 * Module export for Webpack
 */
module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'bootstrap': './src/bootstrap.ts'
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new WebpackOnBuildPlugin(function() {
      BUILD_FILES = fs.readdirSync(BUILD_DIR).filter(function (file) {
        return fs.statSync(BUILD_DIR + file).isFile();
      });
    }),
    new AppCachePlugin({
      cache: BUILD_FILES,
      network: ['*'], // every else need network
      output: 'manifest.appcache'
    }),
    new HtmlWebpackPlugin({
      env: 'production',
      template: 'src/index.html',
      inject: false
    }),
    new CopyWebpackPlugin([{ from: './src/app', to: 'app' }], { ignore: ['*.ts', '*.scss'] })
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html', '.scss']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/,  loader: 'json-loader' },
      { test: /\.scss$/, loader: "style-loader!raw-loader!sass-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(ttf|eot|svg|woff(2)?).*$/, loader: "file-loader?name=app/fonts/[name].[ext]" }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  }
};

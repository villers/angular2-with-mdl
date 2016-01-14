module.exports = function(config) {

  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'spec.bundle.js', watched: false }
    ],

    exclude: [''],

    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpack: {
      resolve: {
        cache: false,
        root: __dirname,
        extensions: ['','.ts','.js','.json', '.css', '.html']
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts-loader' },
          { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.(ttf|eot|svg|woff(2)?).*$/, loader: "file-loader" },
          { test: /\.(png|jpg|jp(e)?g)$/, loader: "url-loader?limit=1000" }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: false,
      noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['spec'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: true,

    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-sourcemap-loader"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
  	]
  });

};

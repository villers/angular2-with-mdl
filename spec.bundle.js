/**
 * From https://github.com/AngularClass/angular2-webpack-starter
 */

Error.stackTraceLimit = Infinity;
require('phantomjs-polyfill');
require('es6-promise');
require('es6-shim');
require('reflect-metadata');

require('zone.js/lib/browser/zone-microtask.js');
require('zone.js/lib/browser/long-stack-trace-zone.js');
require('zone.js/dist/jasmine-patch.js');

/**
 * using that regex we are saying look in ./src/app and ./test then find
 * any file that ends with spec.js and get its path
 */
var testContext = require.context('./test', true, /\.spec\.ts/);
var appContext = require.context('./src', true, /\.spec\.ts/);

/**
 * get all the files, for each file, call the context function
 * that will require the file and load it up here. Context will
 * loop and require those spec files here
 */
appContext.keys().forEach(appContext);
testContext.keys().forEach(testContext);

/**
 * Select BrowserDomAdapter.
 * see https://github.com/AngularClass/angular2-webpack-starter/issues/124
 */
var domAdapter = require('angular2/src/platform/browser/browser_adapter');
domAdapter.BrowserDomAdapter.makeCurrent();

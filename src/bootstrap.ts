/**
 * Angular Providers
 */
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

/*
 * App component
 */
import {App} from './app/app';

document.addEventListener('DOMContentLoaded', () => {
  // Init Material
  setTimeout(() => {
    var Material = require('exports?componentHandler!material-design-lite/material.min.js');
    Material.upgradeDom();
  }, 0);

  // Init Angular app
  bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]).catch(err => console.error(err));
});

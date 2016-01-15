import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';

import {Home} from './modules/home/home';

/**
 * App component.
 */
@Component({
  selector: 'app',
  template: require('!raw!./app.html'),
  styles: [ require('!raw!sass!./app.scss') ],
  directives: [ROUTER_DIRECTIVES]
})

/**
 * Routes configs
 */
@RouteConfig([
  new Route({
    path: '/home',
    component: Home,
    name: 'Home',
    useAsDefault: true
  })
])

/**
 * App class definition.
 */
export class App {
  constructor(private router: Router) {
    console.log('toto');
  }
}

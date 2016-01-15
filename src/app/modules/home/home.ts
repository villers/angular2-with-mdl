import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: require('!raw!./home.html'),
  styles: [ require('!raw!sass!./home.scss') ]
})

/**
 * Home class definition.
 */
export class Home { }

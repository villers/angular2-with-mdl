import {Component} from 'angular2/core';

import './home.scss';

@Component({
  selector: 'home',
  template: `
    <div class="mdl-grid home">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-color--red-600">
            <h1 class="mdl-card__title-text mdl-color-text--white">Angular2Mdl</h1>
          </div>
          <div class="mdl-card__supporting-text">
            A starter kit with Angular 2.<br>
            Powered by Webpack, from development to production and tests.
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Get Started
            </a>
          </div>
          <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-color-text--white mdl-js-button mdl-js-ripple-effect">
              <i class="material-icons">share</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})

/**
 * Home class definition.
 */
export class Home { }

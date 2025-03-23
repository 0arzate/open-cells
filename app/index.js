import { LitElement, html } from 'lit';

import { startApp } from '@open-cells/core';
import { ElementController } from '@open-cells/element-controller';

import styles from './index.css';

import { routes } from './router/routes';

import "./components/app-header/app-header"

import {
  setUrl,
  setLocalesHost,
  requestResources,
  setUseBundles,
} from '@open-cells/localize';

setUseBundles(true);
setLocalesHost('./public/locales');
setUrl('locales.json');

requestResources();

startApp({
  routes,
  mainNode: 'app-content',
});

export class AppIndex extends LitElement {
  constructor() {
    super();
    this.elementController = new ElementController(this);
  }

  static get is() {
    return 'app-index';
  }

  static get styles() {
    return styles
  }

  render() {
    return html`
      <main role="main" tabindex="-1">
        <page-header></page-header>
        <slot>

        </slot>
      </main>
    `;
  }
}

customElements.define(AppIndex.is, AppIndex);
import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './second-page.css';

import '@material/web/button/filled-button.js';

export class SecondPage extends CorePage {
  constructor() {
    super();
  }

  static get is() {
    return 'second-page';
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return styles;
  }

  navigateToHomePage() {
    this.navigate('home');
  }

  render() {
    return html`
    <app-layout>
      <main slot="content">
        <h1>${this.t("second-page.title")}</h1>
        <md-filled-button @click="${this.navigateToHomePage}">
          ${this.t("second-page.button.text")}
        </md-filled-button>
      </main>
    </app-layout>
    `;
  }
}

customElements.define(SecondPage.is, SecondPage);
import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './home-page.css';

import '@material/web/button/filled-button.js';

export class HomePage extends CorePage {
  constructor() {
    super();
  }

  static get is() {
    return 'home-page';
  }

  static get styles() {
    return styles
  }

  navigateToSecondPage() {
    this.navigate('second');
  }

  render() {
    return html`
    <app-layout>
      <main slot="content">
        <h1>${this.t("home-page.title")}</h1>
        <md-filled-button @click="${this.navigateToSecondPage}">
          ${this.t("home-page.button.text")}
        </md-filled-button>
      </main>
    </app-layout>
    `;
  }
}

customElements.define(HomePage.is, HomePage);
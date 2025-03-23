import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './second-page.css';

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
      <main>
        <h1>${this.t("second-page.title")}</h1>
        <button @click="${this.navigateToHomePage}">
          ${this.t("second-page.button.text")}
        </button>
      </main>
    `;
  }
}

customElements.define(SecondPage.is, SecondPage);
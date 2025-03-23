import { html } from 'lit';

import { CorePage } from '../../utils';

import styles from './home-page.css';

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
      <main>
        <h1>${this.t("home-page.title")}</h1>
        <button @click="${this.navigateToSecondPage}">
          ${this.t("home-page.button.text")}
        </button>
      </main>
    `;
  }
}

customElements.define(HomePage.is, HomePage);
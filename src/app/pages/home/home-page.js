import { html } from 'lit';

import { CorePage } from '../../config/core-page.js';

import styles from './home-page.css.js';

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

  sendGreeting() {
    this.publish('greeting', "Hello from home page");
  }

  handlerNavigateToHome() {
    this.sendGreeting();
    this.navigateToSecondPage();
  }

  render() {
    return html`
      <main>
        <h1>${this.t("home-page.title")}</h1>
        <button @click="${this.handlerNavigateToHome}">Go to second page</button>
      </main>
    `;
  }
}

customElements.define(HomePage.is, HomePage);
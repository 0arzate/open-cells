import { html, LitElement } from 'lit';

import { PageController } from '@open-cells/page-controller';

export class HomePage extends LitElement {
  constructor() {
    super();
    this.pageController = new PageController(this);
  }

  static get is() {
    return 'home-page';
  }

  render() {
    return html`
      <button @click="${() => this.pageController.navigate('second')}">Go to second page</button>
    `;
  }
}

customElements.define(HomePage.is, HomePage);
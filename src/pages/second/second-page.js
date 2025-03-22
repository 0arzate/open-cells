import { html, LitElement } from 'lit';

import { PageController } from '@open-cells/page-controller';

export class SecondPage extends LitElement {
  constructor() {
    super();
    this.pageController = new PageController(this);
  }

  static get is() {
    return 'second-page';
  }

  render() {
    return html`
      <button @click="${() => this.pageController.navigate('home')}">Go to home page</button>
    `;
  }
}

customElements.define(SecondPage.is, SecondPage);
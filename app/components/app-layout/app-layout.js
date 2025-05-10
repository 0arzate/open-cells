import { LitElement, html } from "lit";

import styles from "./app-layout.css.js";

export class AppLayout extends LitElement {
  constructor() {
    super();
  }

  static get is() {
    return "app-layout";
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <main>
        <section>
          <slot name="content"></slot>
        </section>
      </main>
    `;
  }
}

customElements.define(AppLayout.is, AppLayout);
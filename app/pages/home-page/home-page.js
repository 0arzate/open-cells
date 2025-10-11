import { html } from 'lit'

import { CorePage } from '../../utils'

import styles from './home-page.css'

export class HomePage extends CorePage {
  static get is () {
    return 'home-page'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <main>
        <section>
          <h1>${this.t('home-page.title')}</h1>
        </section>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)

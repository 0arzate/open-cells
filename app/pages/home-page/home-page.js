import { html } from 'lit'

import { CorePage } from '../../utils'

import styles from './home-page.css'

import { toggleDarkMode, toggleLanguage } from '../../utils/generic-functions'

export class HomePage extends CorePage {
  constructor () {
    super()

    this.toggleLanguage = toggleLanguage
    this.toggleDarkMode = toggleDarkMode
  }

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
          <div>
            <button @click="${this.toggleLanguage}">${this.t('home-page.button.lang')}</button>
            <button @click="${this.toggleDarkMode}">${this.t('home-page.button.dark-mode')}</button>
          </div>
        </section>
      </main>
    `
  }
}

customElements.define(HomePage.is, HomePage)

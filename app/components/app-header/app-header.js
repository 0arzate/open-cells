import { html, LitElement } from "lit";
import { LocalizeMixin } from "@open-cells/localize";

import styles from "./app-header.css"

import { LANGUAGES, LANGUAGES_LABELS, THEME_LABELS, THEMES } from "../../utils/constants";

class appHeader extends LocalizeMixin(LitElement) {
  constructor() {
    super()
  }

  static get is() {
    return 'app-header'
  }

  static get styles() {
    return styles
  }

  static get properties() {
    return {}
  }

  get langLabel() {
    return LANGUAGES_LABELS[document.documentElement.lang]
  }

  toggleLang() {
    const selectedLang = LANGUAGES[document.documentElement.lang]

    document.documentElement.lang = selectedLang
  }

  async toggleTheme() {
    document.documentElement.classList.toggle(THEMES.DARK_MODE)
    await this.requestUpdate()
  }

  get themeLabel() {
    const isDarkMode = document.documentElement.classList.contains(THEMES.DARK_MODE)
    const theme = isDarkMode ? THEMES.DARK_MODE : THEMES.LIGHT_MODE
    return THEME_LABELS[theme]
  }

  render() {
    return html`
      <header>
        <h1>${this.t('app-header.app-name')}</h1>
        <div>
          <button @click="${this.toggleLang}">
            ${`${this.t("app-header.lang-button.text")} ${this.t(this.langLabel)}`}
          </button>
          <button @click="${this.toggleTheme}">
            ${this.themeLabel}
          </button>
        </div>
      </header>
    `
  }
}

customElements.define(appHeader.is, appHeader)
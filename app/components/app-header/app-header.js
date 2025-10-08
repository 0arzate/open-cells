import { html, LitElement } from "lit";
import { LocalizeMixin } from "@open-cells/localize";

import styles from "./app-header.css"

import { LANGUAGES, LANGUAGES_LABELS, THEME_LABELS, THEMES } from "../../utils/constants";

class appHeader extends LocalizeMixin(LitElement) {
  constructor() {
    super()

    this.lang = ''
    this.themeLabel = ''
  }

  static get is() {
    return 'app-header'
  }

  static get styles() {
    return styles
  }

  static get properties() {
    return {
      themeLabel: { type: String }
    }
  }

  firstUpdated() {
    this.lang = document.documentElement.lang
    this.updateThemeLabel()
  }

  get langLabel() {
    return LANGUAGES_LABELS[this.lang]
  }

  toggleLang() {
    const selectedLang = LANGUAGES[this.lang]

    this.lang = selectedLang
    document.documentElement.lang = selectedLang
  }

  toggleTheme() {
    document.documentElement.classList.toggle(THEMES.DARK_MODE)
    this.updateThemeLabel()
  }

  updateThemeLabel() {
    const isDarkMode = document.documentElement.classList.contains(THEMES.DARK_MODE)
    const theme = isDarkMode ? THEMES.DARK_MODE : THEMES.LIGHT_MODE
    this.themeLabel = THEME_LABELS[theme]
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
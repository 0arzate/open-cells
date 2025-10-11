import { LANGUAGES, THEMES } from './constants'

export function toggleLanguage () {
  const selectedLang = LANGUAGES[document.documentElement.lang]
  document.documentElement.lang = selectedLang
}

export function toggleDarkMode () {
  document.documentElement.classList.toggle(THEMES.DARK_MODE)
}

import { LANGUAGES, THEMES } from './constants'

export function toggleLanguage () {
  const currentLang = document.documentElement.lang
  const changedLang = LANGUAGES[currentLang]

  document.documentElement.lang = changedLang
}

export function toggleDarkMode () {
  document.documentElement.classList.toggle(THEMES.DARK_MODE)
}

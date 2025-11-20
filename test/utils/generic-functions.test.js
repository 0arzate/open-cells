import { assert } from 'chai'
import { toggleLanguage } from '../../app/utils/generic-functions'
import { LANGUAGES } from '../../app/utils/constants'

suite('generic-functions', () => {
  suite('toggleLanguage', () => {
    test('should return "en-US" when "es-MX" is the current lang', () => {
      document.documentElement.lang = LANGUAGES['en-US']
      toggleLanguage()

      assert.equal(document.documentElement.lang, LANGUAGES['es-MX'])
    })

    test('should return "es-MX" when "en-US" is the current lang', () => {
      document.documentElement.lang = LANGUAGES['es-MX']
      toggleLanguage()

      assert.equal(document.documentElement.lang, LANGUAGES['en-US'])
    })
  })
})

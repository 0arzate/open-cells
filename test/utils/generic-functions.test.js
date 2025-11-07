import { assert } from 'chai'
import { toggleLanguage } from '../../app/utils/generic-functions'
import { LANGUAGES } from '../../app/utils/constants'

describe('generic-functions', () => {
  describe('toggleLanguage', () => {
    it('should return "en-US" when "es-MX" is the current lang', () => {
      document.documentElement.lang = LANGUAGES['en-US']
      toggleLanguage()

      assert.equal(document.documentElement.lang, LANGUAGES['es-MX'])
    })

    it('should return "es-MX" when "en-US" is the current lang', () => {
      document.documentElement.lang = LANGUAGES['es-MX']
      toggleLanguage()

      assert.equal(document.documentElement.lang, LANGUAGES['en-US'])
    })
  })
})

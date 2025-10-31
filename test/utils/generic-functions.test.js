import { assert } from 'chai'
import { suite, test } from 'mocha'

import { toggleLanguage } from '../../app/utils/generic-functions'
import { LANGUAGES } from '../../app/utils/constants'

suite('generic-functions', () => {
  suite('toggleLanguage', () => {
    test('should set en-US in document when es-MX is a current lang', () => {
      document.documentElement.lang = 'es-MX'

      toggleLanguage()

      const currentLang = document.documentElement.lang
      assert.equal(currentLang, LANGUAGES['en-MX'])
    })
  })
})

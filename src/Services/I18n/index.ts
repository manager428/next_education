import { useCallback } from 'react'

import i18n from 'i18n-js'

import { LANGUAGE } from 'Constants/ids'

import { isServer } from 'Utils/common'

import mainEn from './translations/en.json'
import mainRu from './translations/ru.json'

export const validLanguages = [LANGUAGE.EN, LANGUAGE.RU]

const translationsSet = { en: mainEn, ru: mainRu }

export function initTranslations(locale = 'en') {
  let lang

  if (locale) {
    lang = locale
  } else if (!isServer) {
    lang = window.navigator.language
    lang = lang ? lang.substring(0, 2) : ''
  }

  if (lang && !validLanguages.includes(lang)) {
    lang = LANGUAGE.EN
  }

  i18n.locale = lang || 'en'

  i18n.translations = translationsSet
  i18n.missingTranslation = key => `![${key}]`

  return i18n.locale
}

function _(key: string, options?: any) {
  return i18n.t(key, options)
}

export function useScopedI18n(key: string) {
  return useCallback((subKey, opts?: any) => _(`${key}.${subKey}`, opts), [key])
}

export function LocaleRenderer({ children }: { children: any }) {
  return children
}

export default _

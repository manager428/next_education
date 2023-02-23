import { useEffect } from 'react'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppSelector } from 'Hooks/useStore'

import { selectLocale } from 'Store/locale/selectors'

import { initTranslations } from 'Services/I18n'

const useLocale = () => {
  const { locale } = useAppSelector(selectLocale)
  const params = useRouterQueryParams()

  const lang = (params?.lang as string) || locale

  useEffect(() => {
    initTranslations(lang)
  }, [lang, locale])

  return locale
}

export default useLocale

import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { IS_PRODUCTION } from 'Config'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch } from 'Hooks/useStore'

import { setLocaleThunk } from 'Store/locale/thunks'

import {
  initGA,
  initPixel,
  logPageMetrik,
  logPageViewGA,
  logPageViewPixel,
} from 'Services/Analytics'
import Cookie, { CookiesKeys } from 'Services/Cookies'
import { initTranslations } from 'Services/I18n'
import { initSocket } from 'Services/Socket/utils'

import { isServer } from 'Utils/common'

Cookie.setCookie(null, CookiesKeys.i18n, { locale: 'en' })

initTranslations()
initSocket()

// eslint-disable-next-line no-empty
if (IS_PRODUCTION) {
}

const useBoot = () => {
  const router = useRouter()
  const params = useRouterQueryParams()
  const dispatch = useAppDispatch()
  const lang = params?.lang as string

  const [isGaLoaded, setIsGaLoaded] = useState(false)
  const [isPixelLoaded, setPixelLoaded] = useState(false)

  useEffect(() => {
    if (lang) {
      dispatch(setLocaleThunk({ locale: lang }))
    }
  }, [lang])

  useEffect(() => {
    if (!IS_PRODUCTION || isServer) return

    const handleRouteChange = url => {
      logPageViewGA(url)
      logPageMetrik(url)
      logPageViewPixel()
    }

    if (!isGaLoaded) {
      initGA()
      setIsGaLoaded(true)
    }

    if (!isPixelLoaded) {
      initPixel()
      setPixelLoaded(true)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    // eslint-disable-next-line consistent-return
    return () => {
      if (typeof window === 'undefined') return
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, isGaLoaded])
}

export default useBoot

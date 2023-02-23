import ReactGA from 'react-ga'
import ym from 'react-yandex-metrika'

import { FACEBOOK_PIXEL_KEY, GOOGLE_ANALYTICS_KEY } from 'Config'

export const initGA = () => {
  ReactGA.initialize(GOOGLE_ANALYTICS_KEY)
}

export const logPageViewGA = url => {
  ReactGA.set({ page: url })
  ReactGA.pageview(url)
}

export const logEventGA = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logExceptionGA = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

export const initPixel = () => {
  import('react-facebook-pixel')
    .then(x => x.default)
    .then(ReactPixel => {
      ReactPixel.init(FACEBOOK_PIXEL_KEY) // facebookPixelId
      ReactPixel.pageView()

      window.ReactPixel = ReactPixel
    })
}

export const logPageViewPixel = () => {
  window?.ReactPixel?.pageView()
}

export const logPageMetrik = (url: string) => {
  ym('hit', url)
}

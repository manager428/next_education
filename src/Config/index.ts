export const appearance = {
  theme: 'main',
}

const apiProtocol =
  process.env.NEXT_PUBLIC_API_SSL === 'true' ? 'https' : 'http'
const socketProtocol = process.env.NEXT_PUBLIC_API_SSL === 'true' ? 'wss' : 'ws'

export const IS_PRODUCTION = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME

export const API_URL = `${apiProtocol}://${process.env.NEXT_PUBLIC_API_URL}`
export const CHAT_API_URL = `${socketProtocol}://${process.env.NEXT_PUBLIC_CHAT_API_URL}`

export const GOOGLE_MAP_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP
export const GOOGLE_ANALYTICS_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY as string

export const YANDEX_METRIC_KEY = process.env
  .NEXT_PUBLIC_YANDEX_METRIC_KEY as string

export const FACEBOOK_PIXEL_KEY = process.env
  .NEXT_PUBLIC_FACEBOOK_PIXEL_KEY as string

export const INTERCOM_ID = process.env.NEXT_PUBLIC_INTERCOM_ID as string

export const API = {
  URL: API_URL,
  WS: CHAT_API_URL,
}

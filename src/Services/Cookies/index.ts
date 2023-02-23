import { NextPageContext } from 'next'
import nookies, { parseCookies } from 'nookies'

import get from 'lodash/get'

import { APP_NAME } from 'Config'

import { isJsonString } from 'Utils/json'

export enum CookiesKeys {
  auth = 'auth',
  i18n = 'i18n',
  challengeLike = 'challenge-like',
  challengeCommentLike = 'challenge-comment-like',
}

const setCookie = (
  ctx: NextPageContext | null,
  key: string,
  value: Record<string, any>,
) => {
  nookies.set(ctx, `${APP_NAME}-${key}`, JSON.stringify(value), {
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
}

const getCookie = (ctx: NextPageContext | null, key: string) => {
  const cookies = parseCookies(ctx)

  const cookieValue = get(cookies, [`${APP_NAME}-${key}`])

  if (isJsonString(cookieValue)) {
    return JSON.parse(cookieValue)
  }

  return cookieValue
}

const destroyCookie = (ctx: NextPageContext | null, key: string) => {
  nookies.destroy(ctx, `${APP_NAME}-${key}`, {
    path: '/',
  })
}

export default { setCookie, getCookie, destroyCookie }

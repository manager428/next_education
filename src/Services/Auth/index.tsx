import Router from 'next/router'

import Cookie, { CookiesKeys } from 'Services/Cookies'

const AuthService = {
  setAuth: ({ accessToken, refreshToken }) => {
    Cookie.setCookie(null, CookiesKeys.auth, {
      accessToken,
      refreshToken,
    })
  },

  authorize: ctx => {
    const auth = Cookie.getCookie(ctx, CookiesKeys.auth)

    // If there's no token, it means the user is not logged in.
    if (!auth) {
      if (typeof window === 'undefined') {
        ctx.res.writeHead(302, { Location: '/' })
        ctx.res.end()
      } else {
        Router.push('/')
      }
    }

    return auth
  },

  logout: async () => {
    Cookie.destroyCookie(null, CookiesKeys.auth)
    await Router.push('/')
  },
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />

  Wrapper.getInitialProps = async ctx => {
    const token = AuthService.authorize(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}

export default AuthService

import ApiService from 'Services/Api'
import Cookie, { CookiesKeys } from 'Services/Cookies'
import SocketService from 'Services/Socket/index'

import { isServer } from 'Utils/common'

export function initSocket() {
  const Socket = SocketService.getInstance()

  if (!isServer) {
    const token = Cookie.getCookie(null, CookiesKeys.auth)

    if (token?.accessToken) {
      ApiService.setAuthorizationToken(token.accessToken)

      Socket.initiateSocket(token.accessToken)
    }
  }
}

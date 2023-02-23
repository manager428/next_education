/* eslint-disable no-plusplus,no-underscore-dangle */
import axios from 'axios'

import { API } from 'Config'

import { set as setAuth } from 'Store/auth/slice'
import { logout } from 'Store/auth/thunks'

import AUTH_API_PATHS from 'Services/Api/requests/auth/paths'
import AuthService from 'Services/Auth'
import Cookie from 'Services/Cookies'
import SocketService from 'Services/Socket'

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

const client = axios.create({
  baseURL: API.URL,
})

client.interceptors.response.use(
  res => res,
  async error => {
    const tokens = Cookie.getCookie(null, 'auth')

    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            return client.request(originalRequest)
          })
          .catch(err => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      await axios
        .post(`${API.URL}/${AUTH_API_PATHS.REFRESH_TOKEN}`, {
          refresh_token: tokens?.refreshToken,
        })
        .then(async ({ data }) => {
          const accessToken = data.data.access_token
          const refreshToken = data.data.refresh_token

          AuthService.setAuth({
            accessToken,
            refreshToken,
          })

          if (window) {
            window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(
              setAuth({
                accessToken,
                refreshToken,
              }),
            )
            SocketService.getInstance().updateToken(accessToken)
          }

          client.defaults.headers.common.Authorization = `Bearer ${accessToken}`
          originalRequest.headers.Authorization = `Bearer ${accessToken}`

          processQueue(null, accessToken)

          return client.request(originalRequest)
        })
        .catch(e => {
          if (window) {
            window.__NEXT_REDUX_WRAPPER_STORE__.dispatch(
              logout({ withApiLogout: false }),
            )
          }
          processQueue(e, null)
          return client.request(originalRequest)
        })
        .finally(() => {
          isRefreshing = false
        })
    }

    return Promise.reject(error)
  },
)

export default client

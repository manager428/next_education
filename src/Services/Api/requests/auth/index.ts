import Api from 'Services/Api'
import { IMeResponse } from 'Services/Api/requests/auth/interfaces'

import AUTH_API_PATHS from './paths'

export default {
  checkEmail: (data: any) =>
    Api.query({
      method: 'post',
      url: AUTH_API_PATHS.CHECK_EMAIL,
      data,
    }),

  checkUsername: (data: any) =>
    Api.query({
      method: 'post',
      url: AUTH_API_PATHS.CHECK_USERNAME,
      data,
    }),

  collectFormData: (formData: any) =>
    Api.query({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: AUTH_API_PATHS.SAVE_EMAIL,
      data: formData,
    }),

  registerUser: (values: any) =>
    Api.query({
      url: AUTH_API_PATHS.REGISTER_USER,
      method: 'post',
      data: values,
    }),

  me: (): Promise<{ data: IMeResponse }> =>
    Api.query({
      url: AUTH_API_PATHS.ME,
    }),

  logIn: (values: any) =>
    Api.query({
      url: AUTH_API_PATHS.LOGIN,
      method: 'post',
      data: values,
    }),

  logOut: () =>
    Api.query({
      url: AUTH_API_PATHS.LOGOUT,
    }),

  refreshToken: (values: any) =>
    Api.query({
      url: AUTH_API_PATHS.REFRESH_TOKEN,
      method: 'post',
      data: values,
    }),

  forgotPassword: (values: { email: string }) =>
    Api.query({
      url: AUTH_API_PATHS.FORGOT_PASSWORD,
      method: 'post',
      data: values,
    }),

  resetPassword: (values: {
    email: string
    token: string
    password: string
    password_confirmation: string
  }) =>
    Api.query({
      url: AUTH_API_PATHS.RESET_PASSWORD,
      method: 'post',
      data: values,
    }),
}

import Api from 'Services/Api'

import ABOUT_API_PATHS from './paths'

export default {
  sendContactForm: (data: {
    name: string
    message: string
    email: string
    phone?: string
  }) =>
    Api.query({
      method: 'post',
      url: ABOUT_API_PATHS.CONTACT,
      data,
    }),
}

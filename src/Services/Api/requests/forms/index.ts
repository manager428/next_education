import Api from 'Services/Api'

import FORMS_API_PATHS from './paths'

export default {
  sendBlogForm: (data: FormData) =>
    Api.query({
      url: FORMS_API_PATHS.sendBlogForm,
      method: 'POST',
      data,
    }),
}

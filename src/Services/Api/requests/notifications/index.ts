import Api from 'Services/Api'

import NOTIFICATION_API_PATHS from './paths'

export default {
  delete: (id: number) =>
    Api.query({
      url: NOTIFICATION_API_PATHS.delete(id),
      method: 'delete',
    }),
}

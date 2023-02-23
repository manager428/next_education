import Api from 'Services/Api'

import CHAT_API_PATHS from './paths'

export default {
  users: () =>
    Api.query({
      url: CHAT_API_PATHS.users,
    }),

  user: (id: number) =>
    Api.query({
      url: CHAT_API_PATHS.userDetails(id),
    }),
}

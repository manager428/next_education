import Api from 'Services/Api'

import FRIENDS_API_PATHS from './paths'

export default {
  sendFriendRequest: (userId: number) =>
    Api.query({
      url: FRIENDS_API_PATHS.sendFriendRequest,
      method: 'POST',
      data: {
        user_id: userId,
      },
    }),

  approveFriendRequest: (userId: number) =>
    Api.query({
      url: FRIENDS_API_PATHS.approveFriendRequest,
      method: 'POST',
      data: {
        user_id: userId,
      },
    }),

  cancelOwnFriendRequest: (userId: number) =>
    Api.query({
      url: FRIENDS_API_PATHS.cancelOwnRequest,
      method: 'POST',
      data: {
        user_id: userId,
      },
    }),

  deleteFriend: (userId: number) =>
    Api.query({
      url: FRIENDS_API_PATHS.deleteFriend,
      method: 'delete',
      data: {
        user_id: userId,
      },
    }),

  rejectFriendRequest: (userId: number) =>
    Api.query({
      url: FRIENDS_API_PATHS.rejectFriend,
      method: 'POST',
      data: {
        user_id: userId,
      },
    }),
}

import Api from 'Services/Api'

import COMMUNITY_API_PATHS from './paths'

export type CommunityFetch = {
  type: string
  search?: string
  category?: string
  page?: number
}

export default {
  communityList: () =>
    Api.query({
      url: COMMUNITY_API_PATHS.communityList,
    }),

  createPost: (data: FormData) =>
    Api.query({
      url: COMMUNITY_API_PATHS.createPost,
      method: 'post',
      data,
    }),

  likeCommunity: (id: number) =>
    Api.query({
      url: COMMUNITY_API_PATHS.likeCommunity(id),
      method: 'post',
    }),

  likeCommunityComment: (commentId: number) =>
    Api.query({
      url: COMMUNITY_API_PATHS.likeCommunityComment(commentId),
      method: 'post',
    }),

  addComment: (data: {
    id: number
    comment: string
    notification_user_id: number | null
  }) =>
    Api.query({
      url: COMMUNITY_API_PATHS.addComment(data.id),
      method: 'post',
      data: {
        comment: data.comment,
        notification_user_id: data.notification_user_id,
      },
    }),
}

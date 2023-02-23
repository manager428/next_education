import Api from 'Services/Api'

import FAQ_API_PATHS from './paths'

export default {
  faqList: (role: string) =>
    Api.query({
      url: FAQ_API_PATHS.list(role),
    }),

  faqDetailes: (id: number, role: string) =>
    Api.query({
      url: FAQ_API_PATHS.detailes(id, role),
    }),

  addCommentLike: (commentId: number) =>
    Api.query({
      method: 'post',
      url: FAQ_API_PATHS.addCommentLike(commentId),
    }),

  addComment: (
    faqId: number,
    data: {
      comment: string
      notification_user_id: null | number
    },
  ) =>
    Api.query({
      method: 'post',
      url: FAQ_API_PATHS.addComment(faqId),
      data,
    }),
}

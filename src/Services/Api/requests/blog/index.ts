import Api from 'Services/Api'

import BLOG_API_PATHS from './paths'

export default {
  blogList: () =>
    Api.query({
      url: BLOG_API_PATHS.list,
    }),

  search: (params: { category: string; page: number }) =>
    Api.query({
      url: BLOG_API_PATHS.search,
      params,
    }),

  details: (id: number) =>
    Api.query({
      url: BLOG_API_PATHS.details(id),
    }),

  addLike: (postId: number) =>
    Api.query({
      method: 'post',
      url: BLOG_API_PATHS.likePost(postId),
    }),

  addCommentLike: (commentId: number) =>
    Api.query({
      method: 'post',
      url: BLOG_API_PATHS.likeComment(commentId),
    }),

  addComment: (
    postId: number,
    data: { comment: string; notification_user_id?: number },
  ) =>
    Api.query({
      method: 'post',
      url: BLOG_API_PATHS.addComment(postId),
      data,
    }),
}

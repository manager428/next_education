import Api from 'Services/Api'
import {
  IDiscussionsCommentsParams,
  IDiscussionsParams,
} from 'Services/Api/requests/discussions/interfaces'

import DISCUSSIONS_API_PATHS from './paths'

export default {
  getAll: (params: IDiscussionsParams) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.GET_ALL,
      params,
    }),

  getDiscussionComments: (params: IDiscussionsCommentsParams) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.GET_DISCUSSION_COMMENTS(params.id),
      params,
    }),

  addDiscussion: (data: FormData) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.ADD_DISCUSSION,
      method: 'post',
      data,
    }),

  addDiscussionComment: (id: number, data: { comment: string }) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.ADD_DISCUSSION_COMMENT(id),
      method: 'post',
      data,
    }),

  deleteDiscussion: (id: number) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.DELETE_DISCUSSION(id),
      method: 'delete',
    }),

  addDiscussionLike: (id: number) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.ADD_DISCUSSION_LIKE(id),
      method: 'post',
    }),

  addDiscussionCommentLike: (id: number) =>
    Api.query({
      url: DISCUSSIONS_API_PATHS.ADD_DISCUSSION_COMMENT_LIKE(id),
      method: 'post',
    }),
}

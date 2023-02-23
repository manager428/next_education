import Api from 'Services/Api'

import MODERATOR_API_PATHS from './paths'

type BanUserParams = {
  user_id: number
  ban_days: number
  complaint_reason: string
  text_reason?: string
}

type BlockUserParams = {
  user_id: number
  complaint_reason: string
  text_reason?: string
}

type UpdateCommentParams = {
  id: number
  section: string
  comment: string
}

type DeleteCommentParams = {
  id: number
  section: string
}

type AddWarningParams = {
  user_id: number
  comment?: string
}

export type UsersParams = {
  search?: string
  status?: string
  order?: string
  list?: string
  page?: number
}

export type ComplaintsParams = {
  section?: string
  order?: string
  page?: number
}

export type CommentsParams = {
  section?: string
  order?: string
  page?: number
}

export type UserCommentsParams = {
  section?: string
  order?: string
  page?: number
}

export type UserComplaintsParams = {
  section?: string
  order?: string
  page?: number
}

export type UserBanHistoryParams = {
  id: number
  order?: string
  page?: number
}

type AddUserBookmarkParams = {
  user_id: number
}

type RemoveBanOrBlockParams = {
  user_id: number
}

export type AddComplaintParams = {
  user_id: number
  comment_id: number
  complaint_reason: string
  text_reason: string
  section: string
  experience_type?: string
}

export default {
  users: (params: UsersParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.users,
      params,
    }),

  complaints: (params: ComplaintsParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.complaints,
      params,
    }),

  comments: (params: CommentsParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.comments,
      params,
    }),

  banUser: (data: BanUserParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.banUser,
      method: 'post',
      data,
    }),

  blockUser: (data: BlockUserParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.blockUser,
      method: 'post',
      data,
    }),

  updateComment: (data: UpdateCommentParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.updateComment(data.section, data.id),
      method: 'post',
      data,
    }),

  addWarning: (data: AddWarningParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.addWarning,
      method: 'post',
      data,
    }),

  addUserBookmark: (data: AddUserBookmarkParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.addUserBookmark,
      method: 'post',
      data,
    }),

  removeBanOrBlock: (data: RemoveBanOrBlockParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.removeBanOrBlock,
      method: 'delete',
      data,
    }),

  deleteComment: (data: DeleteCommentParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.updateComment(data.section, data.id),
      method: 'delete',
      data,
    }),

  userComments: (params: UserCommentsParams, userId: number) =>
    Api.query({
      url: MODERATOR_API_PATHS.userComments(userId),
      params,
    }),

  userComplaints: (params: UserCommentsParams, userId: number) =>
    Api.query({
      url: MODERATOR_API_PATHS.userComplaints(userId),
      params,
    }),

  userBanHistory: (params: UserBanHistoryParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.userBanHistory(params.id),
      params,
    }),

  addComplaint: (data: AddComplaintParams) =>
    Api.query({
      url: MODERATOR_API_PATHS.addComplaint,
      method: 'post',
      data,
    }),
}

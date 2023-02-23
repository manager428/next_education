import Api from 'Services/Api'

import DEBATES_API_PATHS from './paths'

export type DebatesListParams = {
  search?: string
  category?: string
  page?: number
  order?: string
}

export type DebateVoteParams = {
  id: number
  comment: string
  vote_type: 'positive' | 'negative'
}

export default {
  debatesList: (params?: DebatesListParams) =>
    Api.query({
      url: DEBATES_API_PATHS.debatesList,
      params,
    }),

  create: (data: FormData) =>
    Api.query({
      url: DEBATES_API_PATHS.debatesList,
      method: 'post',
      data,
    }),

  details: (id: number) =>
    Api.query({
      url: DEBATES_API_PATHS.details(id),
    }),

  vote: (data: DebateVoteParams) =>
    Api.query({
      url: DEBATES_API_PATHS.vote(data.id),
      method: 'post',
      data,
    }),

  likeComment: (commentId: number) =>
    Api.query({
      url: DEBATES_API_PATHS.likeComment(commentId),
      method: 'post',
    }),
}

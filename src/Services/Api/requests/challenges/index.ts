import Api from 'Services/Api'

import CHALLENGES_API_PATHS from './paths'

export default {
  challenges: () =>
    Api.query({
      url: CHALLENGES_API_PATHS.CHALLENGES,
    }),

  likeChallenge: (challengeId: number) =>
    Api.query({
      url: CHALLENGES_API_PATHS.LIKE_CHALLENGE(challengeId),
      method: 'post',
    }),

  likeChallengeComment: (commentId: number) =>
    Api.query({
      url: CHALLENGES_API_PATHS.LIKE_CHALLENGE_COMMENT(commentId),
      method: 'post',
    }),

  loadParticipants: (category: string, all: boolean) =>
    Api.query({
      url: CHALLENGES_API_PATHS.PREVIOUS_CHALLENGES,
      params: {
        category,
        all,
      },
    }),

  createChallenge: (data: FormData) =>
    Api.query({
      url: CHALLENGES_API_PATHS.CREATE_CHALLENGE,
      method: 'post',
      data,
    }),

  addComment: (data: {
    id: number
    author_name: string
    comment: string
    notification_user_id: number | null
  }) =>
    Api.query({
      url: CHALLENGES_API_PATHS.ADD_COMMENT(data.id),
      method: 'post',
      data,
    }),
}

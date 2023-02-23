const CHALLENGES_API_PATHS = {
  CHALLENGES: 'challenges',
  PREVIOUS_CHALLENGES: 'challenges/previous',
  CREATE_CHALLENGE: 'challenges/create',
  CHALLENGE_DETAILS: (id: number) => `challenges/${id}`,
  LIKE_CHALLENGE: (id: number) => `challenges/${id}/like`,
  LIKE_CHALLENGE_COMMENT: (commentId: number) =>
    `challenges/comment/${commentId}/like`,
  ADD_COMMENT: (challengeId: number) => `challenges/${challengeId}/comment`,
}

export default CHALLENGES_API_PATHS

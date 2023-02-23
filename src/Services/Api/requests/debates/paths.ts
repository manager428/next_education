const DEBATES_API_PATHS = {
  debatesList: `debates`,
  create: 'debates',
  details: (id: number) => `debates/${id}`,
  vote: (id: number) => `debates/${id}/vote`,
  likeComment: (commentId: number) => `debates/comment/${commentId}/like`,
}

export default DEBATES_API_PATHS

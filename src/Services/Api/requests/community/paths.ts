const COMMUNITY_API_PATHS = {
  communityList: `community`,
  createPost: `community`,
  addComment: (communityId: number) => `community/${communityId}/comment`,
  communityDetails: (id: number) => `community/${id}`,
  likeCommunity: (id: number) => `community/${id}/like`,
  likeCommunityComment: (commentId: number) =>
    `community/comment/${commentId}/like`,
}

export default COMMUNITY_API_PATHS

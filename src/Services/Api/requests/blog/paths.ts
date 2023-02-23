const BLOG_API_PATHS = {
  list: `blog`,
  details: (id: number) => `blog/${id}`,
  search: 'blog/search',
  likePost: (id: number) => `blog/${id}/like`,
  likeComment: (commentId: number) => `blog/comment/${commentId}/like`,
  addComment: (id: number) => `blog/${id}/comment`,
}

export default BLOG_API_PATHS

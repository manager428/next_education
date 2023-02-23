const FAQ_API_PATHS = {
  addComment: (faqId: number) => `faq/${faqId}/comment`,
  addCommentLike: (commentId: number) => `faq/comment/${commentId}/like`,
  detailes: (id: number, role: string) => `faq/${id}/${role}`,
  list: (role: string) => `faq/${role}`,
}

export default FAQ_API_PATHS

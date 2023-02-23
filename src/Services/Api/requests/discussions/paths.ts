const DISCUSSIONS_API_PATHS = {
  GET_ALL: `/calls-discussions`,
  GET_DISCUSSION_COMMENTS: (id: number) => `/calls-discussions/${id}/comments`,
  ADD_DISCUSSION: `/calls-discussions`,
  ADD_DISCUSSION_COMMENT: (id: number) => `/calls-discussions/${id}/comment`,
  DELETE_DISCUSSION: (id: number) => `/calls-discussions/${id}`,
  ADD_DISCUSSION_LIKE: (id: number) => `/calls-discussions/${id}/like`,
  ADD_DISCUSSION_COMMENT_LIKE: (id: number) =>
    `/calls-discussions/comment/${id}/like`,
}

export default DISCUSSIONS_API_PATHS

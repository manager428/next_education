const CALL_API_PATHS = {
  GET_CALLS: `/call`,
  CREATE_CALL: `/call`,
  CALL_DETAILS: (id: number) => `call/${id}`,
  DELETE: (id: number) => `call/${id}`,
  SET_OPENED: (id: number) => `call/${id}/set-opened`,
  JOIN: (id: number) => `call/${id}/join`,
  LEAVE: (id: number) => `call/${id}/leave`,
  ADD_USER_TO_CALL: (id: number) => `call/${id}/add-user-to-call`,
  DELETE_USER_FROM_CALL: id => `call/${id}/delete-user-from-call`,
  CALL_PAGE_DETAILS: (id: number) => `call/${id}/details`,
  CALL_PAGE_DETAILS_SLUG: (slug: string) => `call/slug/${slug}/details`,
}

export default CALL_API_PATHS

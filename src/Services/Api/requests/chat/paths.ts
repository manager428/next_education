const CHAT_API_PATHS = {
  users: `chat/users`,
  userDetails: (id: number) => `chat/user/${id}`,
}

export default CHAT_API_PATHS

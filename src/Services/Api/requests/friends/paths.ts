const FRIENDS_API_PATHS = {
  sendFriendRequest: `friends`,
  approveFriendRequest: `friends/approve`,
  cancelOwnRequest: `friends/cancel`,
  deleteFriend: `friends`,
  friends: (id: number) => `friends/user/${id}`,
  rejectFriend: `friends/reject`,
}

export default FRIENDS_API_PATHS

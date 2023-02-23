export type Props = {
  friend: {
    userId: number
    isFriend: boolean
    userCanSendFriendRequest: boolean
    userCanDeleteFriendRequest: boolean
    userCanAcceptFriendRequest: boolean
    userCanCancelOwnFriendRequest: boolean
  }
}

export type FriendsData = {
  userCanSendFriendRequest: boolean
  userCanDeleteFriendRequest: boolean
  userCanAcceptFriendRequest: boolean
  userCanCancelOwnFriendRequest: boolean
  isFriend: boolean
  isUserFromClass: boolean
}

export type Props = {
  friendsData: FriendsData
  isLoading: boolean
  onAction: (action: string) => void
}

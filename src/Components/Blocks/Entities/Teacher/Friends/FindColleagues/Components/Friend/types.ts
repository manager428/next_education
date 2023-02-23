export type Props = {
  id: number
  fullname: string
  avatar: string
  country: string
  username: string
  isRequestSent: boolean
  isOnline: boolean
  isLoading: boolean
  onAddFriend: (id: number) => void
  onCancelFriend: (id: number) => void
}

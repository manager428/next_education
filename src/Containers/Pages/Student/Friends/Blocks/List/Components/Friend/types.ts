export type Props = {
  id: number
  fullname: string
  country: string
  avatar: string
  friendStatus: string
  userOnlineStatus: string
  friendType: string
  // roomname: string
  // role: string
  // friendType: string

  onAccept: (id: number) => void
  onCancel: (id: number) => void
  onDelete: (id: number) => void
}

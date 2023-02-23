export interface IFriendsData {
  userCanSendFriendRequest: boolean
  userCanDeleteFriendRequest: boolean
  userCanAcceptFriendRequest: boolean
  userCanCancelOwnFriendRequest: boolean
  isFriend: boolean
  isUserFromClass: boolean
}

export interface IStudent {
  id: number
  avatar: string
  age: number | null
  username: string
  first_name: string
  last_name: string
  full_name: string
  role: string
  assigned_teacher_id: string
  is_blocked: boolean
  is_banned: boolean
  country: string
  friends_data: IFriendsData
  active_time: string
  year_of_birth: string
  user_online_status: 'online' | 'offline'
}

export interface IStudentSearchResponse {
  data: {
    students: IStudent[]
    pagination: {
      lastPage: number
      total: number
      info: string
    }
  }
}

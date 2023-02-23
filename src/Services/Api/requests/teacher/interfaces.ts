import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

export interface IStudentClassDetails {
  id: number
  class_name: string
}

export interface IFriendsData {
  userCanSendFriendRequest: boolean
  userCanDeleteFriendRequest: boolean
  userCanAcceptFriendRequest: boolean
  userCanCancelOwnFriendRequest: boolean
  isFriend: boolean
  isUserFromClass: boolean
}

export interface ITeacher {
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
  class_details?: IStudentClassDetails
  user_online_status: 'online' | 'offline'
}

export interface ITeacherClass {
  id: number
  user_id: number
  class_name: string
  class_code: string
  students_count: number
  class_logo: string
  english_level: ENGLISH_LEVEL_ENUM | null
  english_level_label: string | null
  students: {
    id: number
    student_data: ITeacher
  }[]
}

export interface IStudentsResponse {
  students: ITeacher[]
  pagination: {
    lastPage: number
    total: number
  }
}

export interface IAddTeacherClassResponse {
  data: ITeacherClass
}

export interface IUpdateTeacherClassResponse {
  data: ITeacherClass
}

export interface ITeacherClassesResponse {
  data: ITeacherClass[]
}

export interface IGetStudentsParams {
  page: number
  order?: 'asc' | 'desc'
  search?: string
  exclude_class_ids?: number[]
}

export interface ITeachersSearchResponse {
  data: {
    teachers: ITeacher[]
    pagination: {
      lastPage: number
      total: number
      info: string
    }
  }
}

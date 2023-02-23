export interface IUserClassDetails {
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

export interface IUser {
  id: number
  avatar: string
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
  class_details?: IUserClassDetails
  user_online_status: 'online' | 'offline'
}

export interface IStudent extends IUser {
  teacher_data: {
    id: number
    avatar: string
    username: string
    first_name: string
    last_name: string
    full_name: string
  }
}

export interface ISchoolDetails {
  id: number
  school_name: string
  user_id: number
  logo: string
  code: string
  created_at: '2021-10-11T20:36:13.000000Z'
  updated_at: '2021-10-11T20:49:24.000000Z'
  teachers_count: number
  classes_count: number
  students_count: number
}

export interface ISchoolTeachersResponse {
  teachers: IUser[]
  pagination: {
    lastPage: number
    total: number
  }
}

export interface ISchoolClassroomsResponse {
  classes: {
    id: number
    user_id: number
    class_name: string
    class_code: string
    students_count: number
    teacher: IUser
  }[]
  pagination: {
    lastPage: number
    total: number
  }
}

export interface ISchoolStudentsResponse {
  students: IStudent[]
  pagination: {
    lastPage: number
    total: number
  }
}

export interface ISchoolTeacherStudentsResponse {
  students: IUser[]
  pagination: {
    lastPage: number
    total: number
  }
}

export interface ISchoolTeacherClassroomsResponse {
  classes: IUserClassDetails[]
  pagination: {
    lastPage: number
    total: number
  }
}

export interface ISchoolTeacherClassroomResponse {
  teacher: IUser
  class: {
    id: number
    class_name: string
    class_code: string
    class_logo: string
    students_count: number
  }
  students: IUser[]
  pagination: {
    lastPage: number
    total: number
  }
}

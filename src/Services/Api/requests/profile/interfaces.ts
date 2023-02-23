import { CALL_ENUM } from 'Constants/calls'

export interface IFriendsData {
  userCanSendFriendRequest: boolean
  userCanDeleteFriendRequest: boolean
  userCanAcceptFriendRequest: boolean
  userCanCancelOwnFriendRequest: boolean
  isFriend: boolean
  isUserFromClass: boolean
}

type ActivityStatistic = {
  field_trips: number
  group_calls: number
  class_calls: number
  individual_calls: number
  lectorium: number
  debates: number
}

export interface IProfileResponse {
  profile: {
    id: number
    role: string
    full_name: string
    first_name: string
    last_name: string
    username: string
    country: string
    gender: string
    avatar: string
    english_level: string
    bio: string
    interests: string
    isUserFromClass: boolean
    friends_data: IFriendsData
    year_of_birth?: number
    students_count?: number
    school_classes_count?: number

    user_relations: {
      is_child: boolean
      is_school_admin_user: boolean
      is_teacher_student: boolean
    }
  }
  teacher?: {
    id: number
    full_name: string
    avatar: string
  }

  friends: {
    rows: {
      id: number
      fullname: string
      friendsstatus: string
      country: string
      roomname: string
      avatar: string
      active_time: number
      user_online_status: boolean
      role: string
      friendType: string
    }[]
    rows_count: number
  }

  school?: {
    id: number
    school_name: string
    logo: string
  }

  calls?: {
    id: number
    date: string
    title: string
    studentsLevel: string
    startTime: string
    participants: Array<{
      avatar: string
      id: number
    }>
    images?: string[]
    isFinished: boolean
    isJoined: boolean
    isCreator: boolean
    type: CALL_ENUM
    withParticipantStatus?: boolean
  }[]

  userPosts: {
    challenges: {
      rows: []
      rows_count: number
    }

    community: {
      rows: []
      rows_count: number
    }

    debates: {
      rows_count: number
      rows: []
    }
    lectoriums: {
      rows_count: number
      rows: []
    }
  }

  activity_statistic: {
    all: ActivityStatistic
    month: ActivityStatistic
    week: ActivityStatistic
  }

  virtual_field_trips?: {
    count_countries: number
    count_visits: number
    trips: {
      country_code: string
      country: string
      visits: number
      last_visit: string
    }[]
  }
}

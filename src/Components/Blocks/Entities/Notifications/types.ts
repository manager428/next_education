export enum NOTIFICATION_TYPE {
  CALL = 'call',
  LECTORIUM = 'lectorium',
  CHALLENGES = 'challenges',
  COMMUNITY = 'community',
  DEBATES = 'debates',
  COMMENTS = 'comments',
  FRIENDS = 'friends',
  STUDENTS = 'students',
  BADGES = 'badges',
  GENERAL = 'general',
  TEACHERS_COMMUNITY = 'teachers_community',
  DISCUSSION = 'discussion',
  BLOG = 'blog',
  PROFILE = 'profile',
}

export enum NOTIFICATION_SUBTYPE {
  GENERAL = 'general',
  LIKED = 'liked',
  COMMENTED = 'commented',
  ATTENTION = 'attention',
  ANNOUNCEMENT = 'announcement',
  BADGES = 'badges',
  CHALLENGES = 'challenges',
  COMMUNITY = 'community',
}

export type NotificationType = {
  id: number
  notification_type: NOTIFICATION_TYPE
  notification_title: string
  notification_text: string
  extra_data: {
    id: number
    deleted: boolean
  }
  created_at: string
  is_checked: boolean
}

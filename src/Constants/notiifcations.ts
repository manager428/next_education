import { PRIVATE_PATHS } from './paths'

export const TEACHER_SIDEBAR_OPTIONS = scoped => [
  {
    name: scoped('allNotifications'),
    category: 'all',
    path: PRIVATE_PATHS.NOTIFICATIONS('all'),
  },
  {
    name: scoped('videoCalls'),
    category: 'call',
    path: PRIVATE_PATHS.NOTIFICATIONS('call'),
  },
  {
    name: scoped('classroomCommunity'),
    category: 'teachers_community',
    path: PRIVATE_PATHS.NOTIFICATIONS('teachers_community'),
  },
  {
    name: scoped('students'),
    category: 'students',
    path: PRIVATE_PATHS.NOTIFICATIONS('students'),
  },
  {
    name: scoped('lectorium'),
    category: 'lectorium',
    path: PRIVATE_PATHS.NOTIFICATIONS('lectorium'),
  },
  {
    name: scoped('challenges'),
    category: 'challenges',
    path: PRIVATE_PATHS.NOTIFICATIONS('challenges'),
  },
  {
    name: scoped('community'),
    category: 'community',
    path: PRIVATE_PATHS.NOTIFICATIONS('community'),
  },
  {
    name: scoped('debates'),
    category: 'debates',
    path: PRIVATE_PATHS.NOTIFICATIONS('debates'),
  },
  {
    name: scoped('idBlog'),
    category: 'blog',
    path: PRIVATE_PATHS.NOTIFICATIONS('blog'),
  },
  {
    name: scoped('generalNotifications'),
    category: 'general',
    path: PRIVATE_PATHS.NOTIFICATIONS('general'),
  },
]

export const STUDENT_SIDEBAR_OPTIONS = scoped => [
  {
    name: scoped('allNotifications'),
    category: 'all',
    path: PRIVATE_PATHS.NOTIFICATIONS('all'),
  },
  {
    name: scoped('videoCalls'),
    category: 'call',
    path: PRIVATE_PATHS.NOTIFICATIONS('call'),
  },
  {
    name: scoped('friends'),
    category: 'friends',
    path: PRIVATE_PATHS.NOTIFICATIONS('friends'),
  },
  {
    name: scoped('lectorium'),
    category: 'lectorium',
    path: PRIVATE_PATHS.NOTIFICATIONS('lectorium'),
  },
  {
    name: scoped('challenges'),
    category: 'challenges',
    path: PRIVATE_PATHS.NOTIFICATIONS('challenges'),
  },
  {
    name: scoped('community'),
    category: 'community',
    path: PRIVATE_PATHS.NOTIFICATIONS('community'),
  },
  {
    name: scoped('debates'),
    category: 'debates',
    path: PRIVATE_PATHS.NOTIFICATIONS('debates'),
  },
  {
    name: scoped('idBlog'),
    category: 'blog',
    path: PRIVATE_PATHS.NOTIFICATIONS('blog'),
  },
  {
    name: scoped('profile'),
    category: 'profile',
    path: PRIVATE_PATHS.NOTIFICATIONS('profile'),
  },
]

export const LANGUAGE = {
  EN: 'en',
  RU: 'ru',
}

export enum USER_ROLES {
  teacher = 'teacher',
  student = 'student',
  moderator = 'moderator',
  parent = 'parent',
  schoolAdmin = 'school_admin',
}

export enum ENGLISH_LEVEL_ENUM {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
}

export const STUDENTS_AGE_OPTIONS = [
  { label: 'For All Ages', value: 'all_ages' },
  { value: '10-13', label: '10 - 13 years old' },
  { value: '14-18', label: '14 - 18 years old' },
  { value: '18+', label: '18+' },
]

export enum ADD_COMMENT_MODAL_TYPES {
  CHALLENGE = 'challenge',
  COMMUNITY = 'community',
  STUDENT_POSTS = 'student_posts',
  STUDENT_VIDEOS = 'student_videos',
}

export const BASE_ENGLISH_LEVEL_OPTIONS = [
  {
    label: 'Beginner Level',
    value: ENGLISH_LEVEL_ENUM.Beginner,
  },
  {
    label: 'Intermediate Level',
    value: ENGLISH_LEVEL_ENUM.Intermediate,
  },
  {
    label: 'Advanced Level',
    value: ENGLISH_LEVEL_ENUM.Advanced,
  },
]

export const ENGLISH_LEVEL_OPTIONS = {
  allLevels: {
    label: 'For All Levels',
    value: 'all_levels',
  },
  beginner: {
    label: 'Beginner Level',
    value: ENGLISH_LEVEL_ENUM.Beginner,
  },
  intermediate: {
    label: 'Intermediate Level',
    value: ENGLISH_LEVEL_ENUM.Intermediate,
  },
  advanced: {
    label: 'Advanced Level',
    value: ENGLISH_LEVEL_ENUM.Advanced,
  },
}

import map from 'lodash/map'

export enum BLOG_CATEGORIES {
  ALL = 'all',
  ID_NEWS = 'id-news',
  WORLD_NEWS = 'world-news',
  STUDENTS_VOICE = 'students-voice',
  EVENTS = 'events',
  PRESS = 'press',
}

export const BLOG_CATEGORIES_LABELS = {
  [BLOG_CATEGORIES.ALL]: 'All Posts',
  [BLOG_CATEGORIES.ID_NEWS]: 'ID News',
  [BLOG_CATEGORIES.WORLD_NEWS]: 'World News',
  [BLOG_CATEGORIES.STUDENTS_VOICE]: 'Students Voice',
  [BLOG_CATEGORIES.EVENTS]: 'Our Events',
  [BLOG_CATEGORIES.PRESS]: 'Press',
}

export const BLOG_CATEGORIES_OPTIONS = map(BLOG_CATEGORIES, it => ({
  value: it,
  label: BLOG_CATEGORIES_LABELS[it],
}))

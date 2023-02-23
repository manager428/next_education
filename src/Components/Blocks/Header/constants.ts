import {
  AUTH_PATHS,
  LANDING_PATHS,
  PRIVATE_PATHS,
  PUBLIC_PATHS,
} from 'Constants/paths'

export const RESPONSIVE_ROUTES = [
  '/',
  LANDING_PATHS.PARENTS,
  LANDING_PATHS.EDUCATORS,
  LANDING_PATHS.PRINCIPLES,
  LANDING_PATHS.PARTNERS,
  AUTH_PATHS.SIGN_IN,
  AUTH_PATHS.SIGN_UP,
  AUTH_PATHS.FORGOT,
  AUTH_PATHS.RESET,
  AUTH_PATHS.SIGN_UP_STUDENT,
  AUTH_PATHS.SIGN_UP_TEACHER,
  AUTH_PATHS.SIGN_UP_PARENT,
  AUTH_PATHS.SIGN_UP_SCHOOL,
  AUTH_PATHS.SIGN_UP_SCHOOL_DEMO,
]

export const PUBLIC_LINKS = scoped => [
  {
    href: PUBLIC_PATHS.LECTORIUM,
    title: scoped('lectorium'),
  },
  {
    href: PUBLIC_PATHS.CHALLENGES,
    title: scoped('challenges'),
  },
  {
    href: PUBLIC_PATHS.DEBATES,
    title: scoped('debates'),
  },
  {
    href: PUBLIC_PATHS.BLOG,
    title: 'iD Blog',
  },
]

export const PRIVATE_LINKS = scoped => [
  {
    href: PUBLIC_PATHS.LECTORIUM,
    title: scoped('lectorium'),
  },
  {
    href: PUBLIC_PATHS.CHALLENGES,
    title: scoped('challenges'),
  },
  {
    href: PRIVATE_PATHS.COMMUNITY,
    title: scoped('community'),
  },
  // {
  //   href: PUBLIC_PATHS.DEBATES,
  //   title: scoped('debates'),
  // },
  // {
  //   href: PUBLIC_PATHS.BLOG,
  //   title: scoped('blog'),
  // },
]

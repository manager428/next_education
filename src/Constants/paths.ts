export const ROOT_PATH = '/'
export const AUTH_PATH = '/auth/'
export const MODERATOR_PATH = `${ROOT_PATH}moderator/`
export const TEACHER_PATH = `${ROOT_PATH}teacher/`
export const STUDENT_PATH = `${ROOT_PATH}student/`
export const PARENT_PATH = `${ROOT_PATH}parent/`
export const SCHOOL_PATH = `${ROOT_PATH}school/`
export const NOT_FOUND_PATH = `${ROOT_PATH}404`

export const AUTH_PATHS = {
  SIGN_IN: `${AUTH_PATH}login`,
  SIGN_UP: `${AUTH_PATH}signup`,
  SIGN_UP_TEACHER: `${AUTH_PATH}signup/teacher`,
  SIGN_UP_STUDENT: `${AUTH_PATH}signup/student`,
  SIGN_UP_SCHOOL: `${AUTH_PATH}signup/school`,
  SIGN_UP_SCHOOL_DEMO: `${AUTH_PATH}signup/school/demo`,
  SIGN_UP_PARENT: `${AUTH_PATH}signup/parent`,
  SUCCESS: `${AUTH_PATH}success`,
  FORGOT: `${AUTH_PATH}forgot-password`,
  RESET: `${AUTH_PATH}reset-password`,
  REQUEST_A_DEMO: `${AUTH_PATH}signup/school/demo`,
}

export const LANDING_PATHS = {
  EDUCATORS: `/for-educators`,
  PARENTS: `/for-parents`,
  PARTNERS: `/for-partners`,
  PRINCIPLES: '/for-principles',
}

export const PUBLIC_PATHS = {
  CHALLENGES: `${ROOT_PATH}challenges`,
  CHALLENGES_SUBMIT: `${ROOT_PATH}challenges/submit`,
  LECTORIUM: `${ROOT_PATH}lectorium`,
  LECTORIUM_POST: (id: number) => `${ROOT_PATH}lectorium/view/${id}`,
  LECTORIUM_SPECIAL_PROJECT: (slug?: string): string =>
    `${ROOT_PATH}lectorium/special/${slug || ':slug'}`,
  DEBATES: `${ROOT_PATH}debates`,
  DEBATE: (id: number) => `${ROOT_PATH}debates/${id}`,
  BLOG: `${ROOT_PATH}blog`,
  BLOG_CATEGORY: (category: string) => `${ROOT_PATH}blog/category/${category}`,
  BLOG_POST: (id: number) => `${ROOT_PATH}blog/detailed/${id}`,
  FAQ: (role: string, category?: string): string =>
    category
      ? `${ROOT_PATH}faq/${role}?category=${category}`
      : `${ROOT_PATH}faq/${role}`,
  FAQ_DETAILED: (role: string, id: number): string =>
    `${ROOT_PATH}faq/view/${role}/${id}`,
  TERMS: `${ROOT_PATH}terms-and-conditions`,
  POLICY: `${ROOT_PATH}privacy-policy`,
  ABOUT: `${ROOT_PATH}about`,
  CALL: (id: number): string => `${ROOT_PATH}call/details/${id}`,
  PRIVACY: `${ROOT_PATH}privacy-policy`,
}

export const PRIVATE_PATHS = {
  HOME: `${ROOT_PATH}home`,
  COMMUNITY: `${ROOT_PATH}community`,
  COMPLAINT: `${ROOT_PATH}complaint`,
  NOTIFICATIONS: (category?: string) =>
    category
      ? `${ROOT_PATH}notifications/${category}`
      : `${ROOT_PATH}notifications`,
  CHAT: `${ROOT_PATH}chat`,
  USER_PROFILE: (id: number) => `${ROOT_PATH}profile/${id}`,
  LECTORIUM_CREATE: `${ROOT_PATH}lectorium/create`,
  CALLS: `${ROOT_PATH}calls`,
  TEACHER_FORUM: `${ROOT_PATH}teacher-forum/discussions`,
  SETTINGS: `${ROOT_PATH}settings`,
}

export const PARENT_PATHS = {
  MANAGE: `${PARENT_PATH}manage`,
}

export const MODERATOR_PATHS = {
  MANAGE: `${MODERATOR_PATH}manage`,
  MANAGE_USERS: `${MODERATOR_PATH}manage/users`,
  MANAGE_COMPLAINTS: `${MODERATOR_PATH}manage/complaints`,
  MANAGE_COMMENTS: `${MODERATOR_PATH}manage/comments`,
  MANAGE_POSTS: `${MODERATOR_PATH}manage/posts`,
  USER: (id: number): string => `${MODERATOR_PATH}user/${id}`,
  USER_COMPLAINTS: (id: number): string =>
    `${MODERATOR_PATH}user/${id}/complaints`,
  USER_COMMENTS: (id: number): string => `${MODERATOR_PATH}user/${id}/comments`,
  USER_BAN_HISTORY: (id: number): string =>
    `${MODERATOR_PATH}user/${id}/ban-history`,
}

export const STUDENT_PATHS = {
  FRIENDS: (userId: number) => `${STUDENT_PATH}friends/${userId}`,
  DIGITAL_PASSPORT: (userId: number) =>
    `${STUDENT_PATH}digital-passport/${userId}`,
}

export const TEACHER_PATHS = {
  FRIENDS: `${TEACHER_PATH}friends`,
  FRIENDS_PUBLIC: (id: number) => `${TEACHER_PATH}friends/${id}`,
  MANAGE: `${TEACHER_PATH}manage`,
  CLASSES: (id?: number) =>
    id ? `${TEACHER_PATH}classes/${id}` : `${TEACHER_PATH}classes`,
}

export const SCHOOL_PATHS = {
  MANAGE: `${SCHOOL_PATH}manage`,
  TEACHERS: `${SCHOOL_PATH}manage/teachers`,
  CLASSROOMS: `${SCHOOL_PATH}manage/classrooms`,
  STUDENTS: `${SCHOOL_PATH}manage/students`,
  TEACHER_STUDENTS: (teacherId: number) =>
    `${SCHOOL_PATH}manage/teacher/${teacherId}/students`,
  TEACHER_CLASSROOMS: (teacherId: number) =>
    `${SCHOOL_PATH}manage/teacher/${teacherId}/classrooms`,
  TEACHER_CLASSROOM: (teacherId: number, classroomId: number) =>
    `${SCHOOL_PATH}manage/teacher/${teacherId}/classroom/${classroomId}`,
  SETTINGS: `${SCHOOL_PATH}settings`,
}

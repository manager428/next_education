import Api from 'Services/Api'

import LECTORIUM_API_PATHS from './paths'

type Search = {
  search: string
  category?: string
  english_level?: string
  duration?: string
  paginate?: number
  order?: string
}

export default {
  lectorium: () =>
    Api.query({
      url: LECTORIUM_API_PATHS.LECTORIUMS,
    }),

  special: (slug: string) =>
    Api.query({
      url: LECTORIUM_API_PATHS.SPECIAL(slug),
    }),

  view: (id: number) =>
    Api.query({
      url: LECTORIUM_API_PATHS.VIEW(id),
    }),

  search: (data: Search) =>
    Api.query({
      url: LECTORIUM_API_PATHS.SEARCH,
      params: {
        ...data,
      },
    }),

  createLectorium: (data: FormData) =>
    Api.query({
      url: LECTORIUM_API_PATHS.CREATE_LECTORIUM,
      method: 'post',
      data,
    }),

  updateLectoriumPrivacy: (lectoriumId: number, privacy: string[]) =>
    Api.query({
      url: LECTORIUM_API_PATHS.UPDATE_LECTORIUM_PRIVACY(lectoriumId),
      method: 'post',
      data: {
        privacy,
      },
    }),

  getStudentsByLectorium: (lectoriumId: number) =>
    Api.query({
      url: LECTORIUM_API_PATHS.LECTORIUM_STUDENT_PROGRESS(lectoriumId),
    }),

  setProgress: (id: number, type: string) =>
    Api.query({
      url: LECTORIUM_API_PATHS.SET_PROGRESS(id, type),
      method: 'post',
    }),

  addExperience: (id: number, data: FormData) =>
    Api.query({
      url: LECTORIUM_API_PATHS.ADD_EXPERIENCE(id),
      method: 'post',
      data,
    }),

  addExperienceComment: (data: {
    lectoriumId: number
    experienceId: number
    comment: string
    notification_user_id: number | null
  }) =>
    Api.query({
      url: LECTORIUM_API_PATHS.ADD_EXPERIENCE_COMMENT(
        data.lectoriumId,
        data.experienceId,
      ),
      method: 'post',
      data: {
        comment: data.comment,
        notification_user_id: data.notification_user_id,
      },
    }),

  addLike: (id: string) =>
    Api.query({
      url: LECTORIUM_API_PATHS.LIKE(id),
      method: 'post',
    }),

  addSpecialProjectCommentLike: (id: number) =>
    Api.query({
      url: LECTORIUM_API_PATHS.LIKE_SPECIAL_PROJECT_COMMENT(id),
      method: 'post',
    }),

  addExperienceLike: (lectoriumId: number, experienceId: number) =>
    Api.query({
      url: LECTORIUM_API_PATHS.LIKE_EXPERIENCE(lectoriumId, experienceId),
      method: 'post',
    }),

  addExperienceCommentLike: (commentId: number) =>
    Api.query({
      url: LECTORIUM_API_PATHS.LIKE_EXPERIENCE_COMMENT(commentId),
      method: 'post',
    }),

  addSpecialComment: (slug: string, values: { comment: string }) =>
    Api.query({
      url: LECTORIUM_API_PATHS.ADD_SPECIAL_COMMENT(slug),
      method: 'post',
      data: {
        ...values,
      },
    }),
}

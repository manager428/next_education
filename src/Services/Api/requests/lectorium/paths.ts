const LECTORIUM_API_PATHS = {
  LECTORIUMS: `lectorium`,
  SPECIAL: (slug: string) => `lectorium/special/${slug}`,
  VIEW: (id: number) => `lectorium/detail/${id}`,
  CREATE_LECTORIUM: 'lectorium/save',
  SEARCH: 'lectorium/search',
  UPDATE_LECTORIUM_PRIVACY: (lectoriumId: number) =>
    `lectorium/${lectoriumId}/update-privacy`,
  LECTORIUM_STUDENT_PROGRESS: (lectoriumId: number) =>
    `lectorium/${lectoriumId}/student-progress`,
  SET_PROGRESS: (id: number, type: string) =>
    `lectorium/${id}/progress/${type}`,
  ADD_EXPERIENCE: (id: number) => `lectorium/${id}/experience`,
  LIKE: (id: string) => `lectorium/${id}/like`,
  LIKE_EXPERIENCE: (lectoriumId: number, experienceId: number) =>
    `lectorium/${lectoriumId}/experience/${experienceId}/like`,
  LIKE_SPECIAL_PROJECT_COMMENT: (id: number) =>
    `lectorium/special/comment/${id}/like`,
  LIKE_EXPERIENCE_COMMENT: (commentId: number) =>
    `lectorium/comment/${commentId}/like`,
  EXPRIENCE_POST: (shareExperienceType: string, id: number) =>
    `lectorium/experience/${shareExperienceType}/${id}`,
  ADD_SPECIAL_COMMENT: (slug: string) => `lectorium/special/${slug}/comment`,
  ADD_EXPERIENCE_COMMENT: (id: number, experienceId: number) =>
    `lectorium/${id}/experience/${experienceId}/comment`,
}

export default LECTORIUM_API_PATHS

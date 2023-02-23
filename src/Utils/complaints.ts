import { SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'
import { PRIVATE_PATHS } from 'Constants/paths'

export enum COMPLAINT_SECTIONS {
  LECTORIUM = 'lectorium',
  CHALLENGES = 'challenges',
  BLOG = 'blog',
  COMMUNITY = 'community',
  DEBATES = 'debates',
  CHAT = 'chat',
  VIDEO_CALLS = 'video_calls',
  FAQ = 'faq',
}

export const openComplaintPage = ({
  userId,
  user,
  section,
  commentId,
  experienceType,
}: {
  userId: number
  user: string
  section?: COMPLAINT_SECTIONS
  commentId: number | string
  experienceType?: typeof SHARE_EXPERIENCE_TYPES[keyof typeof SHARE_EXPERIENCE_TYPES]
}): void => {
  window.open(
    `${PRIVATE_PATHS.COMPLAINT}?userId=${userId}&user=${user}&section=${section}&commentId=${commentId}&experienceType=${experienceType}`,
    '_blank',
  )
}

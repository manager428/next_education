import { useRouter } from 'next/router'

import { USER_ROLES } from 'Constants/ids'
import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'

const TEACHER_PROTECTED_ROUTES = [PRIVATE_PATHS.LECTORIUM_CREATE]

const usePageRoleProtect = (): boolean => {
  const router = useRouter()
  const me = useMe()

  let isAllowed = true

  if (
    router.pathname.startsWith(`/${USER_ROLES.parent}`) &&
    me?.role !== USER_ROLES.parent
  ) {
    isAllowed = false
  }

  if (
    router.pathname.startsWith(`/${USER_ROLES.moderator}`) &&
    me?.role !== USER_ROLES.moderator
  ) {
    isAllowed = false
  }

  // teacher checks
  if (
    TEACHER_PROTECTED_ROUTES.includes(router.pathname) &&
    me?.role !== USER_ROLES.teacher
  ) {
    isAllowed = false
  }

  // school_admin checks
  if (
    router.pathname.startsWith(`/school}`) &&
    me?.role !== USER_ROLES.schoolAdmin
  ) {
    isAllowed = false
  }

  return isAllowed
}

export default usePageRoleProtect

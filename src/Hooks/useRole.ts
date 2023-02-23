import { USER_ROLES } from 'Constants/ids'

import { useAppSelector } from 'Hooks/useStore'

import { selectMe } from 'Store/me/selectors'

const useRole = () => {
  const { me, isLoggedIn } = useAppSelector(selectMe)
  const role = me?.role

  return {
    role,
    isParent: role === USER_ROLES.parent,
    isTeacher: role === USER_ROLES.teacher,
    isStudent: role === USER_ROLES.student,
    isModerator: role === USER_ROLES.moderator,
    isSchoolAdmin: role === USER_ROLES.schoolAdmin,
    isLoggedIn,
  }
}

export default useRole

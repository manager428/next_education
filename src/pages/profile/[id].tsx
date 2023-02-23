import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import get from 'lodash/get'
import includes from 'lodash/includes'
import isNil from 'lodash/isNil'

import { Loader } from 'Components/UI'

import { USER_ROLES } from 'Constants/ids'
import { NOT_FOUND_PATH } from 'Constants/paths'

import useMe from 'Hooks/useMe'

import ApiService from 'Services/Api'
import { profileApi } from 'Services/Api/requests'
import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import CookieService, { CookiesKeys } from 'Services/Cookies'

import { isServer } from 'Utils/common'

const TeacherProfileContainer = dynamic(
  () => import('Containers/Pages/Teacher/Profile'),
  {
    ssr: false,
    loading: Loader,
  },
)

const StudentProfileContainer = dynamic(
  () => import('Containers/Pages/Student/Profile'),
  {
    ssr: false,
    loading: Loader,
  },
)

type Props = {
  initialData: IProfileResponse
}

const ALLOWED_ROLES_FOR_TEACHER_PROFILE = [
  USER_ROLES.teacher,
  USER_ROLES.schoolAdmin,
  USER_ROLES.parent,
]
const Profile: NextPage<Props> = ({ initialData }) => {
  const role = get(initialData, ['data', 'profile', 'role'])
  const router = useRouter()

  const me = useMe()

  if (!isServer && !isNil(me?.role)) {
    if (
      role === USER_ROLES.teacher &&
      !includes(ALLOWED_ROLES_FOR_TEACHER_PROFILE, me?.role)
    ) {
      router.push(NOT_FOUND_PATH)
    }
  }

  if (role === USER_ROLES.teacher) {
    return <TeacherProfileContainer initialData={initialData} />
  }

  return <StudentProfileContainer initialData={initialData} />
}

export async function getServerSideProps(context: any) {
  const authCookie = CookieService.getCookie(context, CookiesKeys.auth)

  // Need for correct prerending for allowed users
  if (authCookie?.accessToken) {
    ApiService.setAuthorizationToken(authCookie.accessToken)
  }

  const {
    query: { id },
  } = context

  let data = {}

  try {
    data = await profileApi.details(id)
  } catch (e) {
    if (e.status === 404) {
      return { notFound: true }
    }

    return {
      props: {
        initialData: {},
        withLoader: true,
      },
    }
  }

  return {
    props: {
      initialData: data,
      withLoader: false,
    },
  }
}

export default Profile

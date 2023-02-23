import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Router from 'next/router'

import some from 'lodash/some'

import { Loader } from 'Components/UI'

import ApiService from 'Services/Api'
import { authApi, profileApi } from 'Services/Api/requests'
import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'
import CookieService, { CookiesKeys } from 'Services/Cookies'

import { isServer } from 'Utils/common'

const StudentDigitalPassportContainer = dynamic(
  () => import('Containers/Pages/Student/DigitalPassport'),
  {
    ssr: false,
    loading: Loader,
  },
)

type Props = {
  initialData: {
    profileData: {
      data: IProfileResponse
    }
  }
}

const DigitalPassport: NextPage<Props> = ({ initialData }) => (
  <StudentDigitalPassportContainer initialData={initialData} />
)

export async function getServerSideProps(context: any) {
  const authCookie = CookieService.getCookie(context, CookiesKeys.auth)

  // Need for correct prerending for allowed users
  if (authCookie?.accessToken) {
    ApiService.setAuthorizationToken(authCookie.accessToken)
  }

  const {
    query: { id },
  } = context

  try {
    return Promise.all([profileApi.details(id), authApi.me()]).then(result => {
      const [profileData, meData] = result

      const userRelations = profileData.data?.profile.user_relations
      const isOwnProfile = profileData.data?.profile.id === meData.data?.id

      const isAllowed = some(
        [
          isOwnProfile,
          userRelations?.is_child,
          userRelations?.is_school_admin_user,
          userRelations?.is_teacher_student,
        ],
        it => !!it,
      )

      if (!isAllowed) {
        if (isServer) {
          context.res.writeHead(302, { Location: '/' })
          context.res.end()
        } else {
          Router.push('/')
        }
      }

      return {
        props: {
          initialData: {
            profileData,
          },
          withLoader: true,
        },
      }
    })
  } catch (e) {
    return {
      props: {
        initialData: {},
        withLoader: true,
      },
    }
  }
}

export default DigitalPassport

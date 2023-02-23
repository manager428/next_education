import React from 'react'

import LectoriumExplore from 'Containers/Pages/Lectorium/Explore'

import ApiService from 'Services/Api'
import { lectoriumApi } from 'Services/Api/requests'
import CookieService, { CookiesKeys } from 'Services/Cookies'

const LectoriumView = ({ initialData, withLoader }: any) => (
  <LectoriumExplore initialData={initialData} withLoader={withLoader} />
)

export async function getServerSideProps(context: any) {
  const authCookie = CookieService.getCookie(context, CookiesKeys.auth)

  // Need for correct prerending for allowed users
  if (authCookie?.accessToken) {
    ApiService.setAuthorizationToken(authCookie?.accessToken)
  }

  const {
    query: { id },
  } = context

  let data = {}

  try {
    data = await lectoriumApi.view(id)
  } catch (e) {
    if (e.status === 404) {
      return {
        notFound: true,
      }
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

export default LectoriumView

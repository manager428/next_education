import Api from 'Services/Api'
import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'

import PROFILE_API_PATHS from './paths'

export default {
  details: (id: number): Promise<{ data: IProfileResponse }> =>
    Api.query({
      url: PROFILE_API_PATHS.details(id),
    }),

  update: (
    data:
      | {
          first_name?: string
          last_name?: string
          username?: string
          bio?: string
          english_level?: string
          avatar?: File
          password?: string
          new_password?: string
          new_password_confirmation?: string
          gender?: string
          year_of_birth?: number
          language_code?: string
        }
      | FormData,
  ) =>
    Api.query({
      url: PROFILE_API_PATHS.update,
      method: 'post',
      data,
    }),
}

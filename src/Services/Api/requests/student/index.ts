import Api from 'Services/Api'

import { IStudentSearchResponse } from './interfaces'
import STUDENT_API_PATHS from './paths'

export default {
  search: ({
    page,
    search,
  }: {
    page: number
    search: string
  }): Promise<IStudentSearchResponse> =>
    Api.query({ url: STUDENT_API_PATHS.search, data: { page, search } }),
}

import Api from 'Services/Api'

import PARENT_API_PATHS from './paths'

type AddChildParams = {
  first_name: string
  username: string
  password: string
  year_of_birth: string
}

type ChangePasswordParams = {
  userId: number
  password: string
  password_confirmation: string
}

type ReassignChildParams = {
  teacher_code: string
  userId: number
}

export default {
  getInfo: () =>
    Api.query({
      url: PARENT_API_PATHS.getInfo,
    }),

  addChild: (params: AddChildParams) =>
    Api.query({
      url: PARENT_API_PATHS.addChild,
      method: 'post',
      data: params,
    }),

  changeChildPassword: (params: ChangePasswordParams) =>
    Api.query({
      url: PARENT_API_PATHS.changeChildPassword(params.userId),
      method: 'post',
      data: params,
    }),

  reassignChild: (params: ReassignChildParams) =>
    Api.query({
      url: PARENT_API_PATHS.reassignChild(params.userId),
      method: 'post',
      data: {
        teacher_code: params.teacher_code,
      },
    }),

  deleteChild: (userId: number) =>
    Api.query({
      url: PARENT_API_PATHS.deleteChild(userId),
      method: 'delete',
    }),
}

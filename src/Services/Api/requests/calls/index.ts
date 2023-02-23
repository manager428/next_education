import Api from 'Services/Api'
import { CallSetOpenedParams } from 'Services/Api/requests/calls/interfaces'

import CALLS_API_PATHS from './paths'

export default {
  createCall: (data: FormData) =>
    Api.query({
      url: CALLS_API_PATHS.CREATE_CALL,
      method: 'post',
      data,
    }),

  details: (callId: number) =>
    Api.query({
      url: CALLS_API_PATHS.CALL_DETAILS(callId),
    }),

  delete: (callId: number) =>
    Api.query({
      url: CALLS_API_PATHS.DELETE(callId),
      method: 'delete',
    }),

  setOpened: (callId: number, data: CallSetOpenedParams) =>
    Api.query({
      url: CALLS_API_PATHS.SET_OPENED(callId),
      method: 'post',
      data,
    }),

  join: (callId: number, timezone: string, teacherClassIds: string[] = []) =>
    Api.query({
      url: CALLS_API_PATHS.JOIN(callId),
      method: 'post',
      data: {
        teacher_classes_ids: teacherClassIds,
        user_timezone: timezone,
      },
    }),

  leave: (callId: number) =>
    Api.query({
      url: CALLS_API_PATHS.LEAVE(callId),
      method: 'post',
    }),

  addUserToCall: (callId: number, userId: number) =>
    Api.query({
      url: CALLS_API_PATHS.ADD_USER_TO_CALL(callId),
      method: 'post',
      data: {
        user_id: userId,
      },
    }),

  deleteUserFromCall: (callId: number, userId: number) =>
    Api.query({
      url: CALLS_API_PATHS.DELETE_USER_FROM_CALL(callId),
      method: 'post',
      data: {
        user_id: userId,
      },
    }),

  pageDetails: (callId: number) =>
    Api.query({
      url: CALLS_API_PATHS.CALL_PAGE_DETAILS(callId),
    }),

  pageDetailsBySlug: (slug: string) =>
    Api.query({
      url: CALLS_API_PATHS.CALL_PAGE_DETAILS_SLUG(slug),
    }),
}

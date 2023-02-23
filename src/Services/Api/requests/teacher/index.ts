import forEach from 'lodash/forEach'
import pickBy from 'lodash/pickBy'

import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

import Api from 'Services/Api'

import {
  IAddTeacherClassResponse,
  ITeachersSearchResponse,
  IUpdateTeacherClassResponse,
} from './interfaces'
import TEACHER_API_PATHS from './paths'

export default {
  students: () =>
    Api.query({
      url: TEACHER_API_PATHS.getStudents,
    }),

  addBadge: ({ userId, badges }: { userId: number; badges: any[] }) =>
    Api.query({
      url: TEACHER_API_PATHS.addBadge,
      method: 'post',
      data: {
        user_id: userId,
        badges,
      },
    }),

  addStudent: ({
    username,
    first_name,
    last_name,
    password,
    password_confirmation,
    year_of_birth,
    class_id,
  }: {
    username: string
    first_name: string
    last_name: string
    password: string
    password_confirmation: string
    year_of_birth: number
    class_id: number
  }) =>
    Api.query({
      url: TEACHER_API_PATHS.addStudent,
      method: 'post',
      data: {
        username,
        first_name,
        last_name,
        password,
        password_confirmation,
        year_of_birth,
        class_id,
      },
    }),

  removeStudent: (userId: number) =>
    Api.query({
      url: TEACHER_API_PATHS.removeStudent(userId),
      method: 'delete',
    }),

  changeStudentPassword: ({
    userId,
    password,
  }: {
    userId: number
    password: string
  }) =>
    Api.query({
      url: TEACHER_API_PATHS.changeStudentPassword,
      method: 'post',
      data: {
        user_id: userId,
        password,
        password_confirmation: password,
      },
    }),

  assignToClass: ({
    userIds,
    classId,
  }: {
    userIds: number[]
    classId: number
  }) =>
    Api.query({
      url: TEACHER_API_PATHS.assignToClass(classId),
      method: 'patch',
      data: { users: userIds },
    }),

  updateYearOfBirth: ({
    userId,
    yearOfBirth,
  }: {
    userId: number
    yearOfBirth: number
  }) =>
    Api.query({
      url: TEACHER_API_PATHS.updateYearOfBirth(userId),
      method: 'patch',
      data: { year_of_birth: yearOfBirth },
    }),

  addClass: ({
    className,
    englishLevel,
  }: {
    className: string
    englishLevel: ENGLISH_LEVEL_ENUM
  }): Promise<IAddTeacherClassResponse> =>
    Api.query({
      url: TEACHER_API_PATHS.addClass,
      method: 'post',
      data: { class_name: className, english_level: englishLevel },
    }),

  updateClass: (values: {
    classId: number
    englishLevel: ENGLISH_LEVEL_ENUM
    className?: string
    userIds?: number[]
    classLogo?: File
  }): Promise<{ data: IUpdateTeacherClassResponse }> => {
    const formData = new FormData()

    Object.entries(pickBy(values)).forEach(([key, value]) => {
      if (key === 'englishLevel') {
        formData.append('english_level', value as string)
      }
      if (key === 'className') {
        formData.append('class_name', value as string)
      }
      if (key === 'userIds') {
        forEach(value as string, (it: string, ind) => {
          formData.append(`userIds[${ind}]`, it)
        })
      }
      if (key === 'classLogo') {
        formData.append('class_logo', value as File)
      }
    })

    return Api.query({
      url: TEACHER_API_PATHS.updateClass(values.classId),
      method: 'post',
      data: formData,
    })
  },

  deleteClass: ({ classId }: { classId: number }) =>
    Api.query({
      url: TEACHER_API_PATHS.deleteClass(classId),
      method: 'delete',
    }),

  search: ({
    page,
    search,
  }: {
    page: number
    search: string
  }): Promise<ITeachersSearchResponse> =>
    Api.query({ url: TEACHER_API_PATHS.search, data: { page, search } }),
}

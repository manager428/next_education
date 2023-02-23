import forEach from 'lodash/forEach'

import Api from 'Services/Api'
import { ISchoolTeachersResponse } from 'Services/Api/requests/school/interfaces'

import SCHOOL_API_PATHS from './paths'

export default {
  schoolDetails: (id: number) =>
    Api.query({
      url: SCHOOL_API_PATHS.schoolDetails(id),
    }),

  updateSchoolProfile: (
    schoolId: number,
    data: {
      first_name?: string
      last_name?: string
      country_code?: string
      email?: string
      password?: string
      new_password?: string
      new_password_confirmation?: string
      school_name?: string
      logo?: File
    },
  ) => {
    const formData = new FormData()

    forEach(data, (value, index) => {
      formData.append(index, value as any)
    })

    return Api.query({
      url: SCHOOL_API_PATHS.updateSchoolProfile(schoolId),
      method: 'post',
      data: formData,
    })
  },
  deleteTeacher: (schoolId: number, teacherId: number) =>
    Api.query({
      url: SCHOOL_API_PATHS.deleteTeacher(schoolId, teacherId),
      method: 'delete',
    }),

  deleteStudent: (schoolId: number, studentId: number) =>
    Api.query({
      url: SCHOOL_API_PATHS.deleteStudent(schoolId, studentId),
      method: 'delete',
    }),

  changeStudentPassword: ({
    schoolId,
    studentId,
    password,
  }: {
    schoolId: number
    studentId: number
    password: string
  }) =>
    Api.query({
      url: SCHOOL_API_PATHS.changeStudentPassword(schoolId, studentId),
      method: 'post',
      data: {
        student_id: studentId,
        password,
        password_confirmation: password,
      },
    }),

  reassignClassToTeacher: (
    schoolId: number,
    data: {
      classes_ids: number[]
      user_id: number
    },
  ) =>
    Api.query({
      url: SCHOOL_API_PATHS.reassignClassToTeacher(schoolId),
      method: 'post',
      data,
    }),

  reassignStudentToTeacher: ({
    schoolId,
    studentsIds,
    teacherId,
    classroomId,
  }: {
    schoolId: number
    studentsIds: number[]
    teacherId: number
    classroomId: number
  }) =>
    Api.query({
      url: SCHOOL_API_PATHS.reassignStudentToTeacher(schoolId),
      method: 'post',
      data: {
        students_ids: studentsIds,
        user_id: teacherId,
        class_id: classroomId,
      },
    }),

  schoolTeachers: (
    id: number,
    params: {
      search?: string
      page?: number
    },
  ): Promise<{ data: ISchoolTeachersResponse }> =>
    Api.query({
      url: SCHOOL_API_PATHS.schoolTeachers(id),
      params,
    }),
}

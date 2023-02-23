type Option = {
  label: string
  value: string | number
}

export type Props = {
  initValues?: FormValues
  type: string
  isEdit?: boolean
  onClose: () => void
}

export enum FIELDS {
  TITLE = 'title',
  DATE = 'date',
  START_TIME = 'startTime',
  END_TIME = 'endTime',
  DESCRIPTION = 'description',
  STUDENTS_AGE = 'studentsAge',
  STUDENTS_LEVEL = 'studentsLevel',
  NUMBER_OF_TEACHERS = 'numberOfTeachers',
  INVITE_STUDENTS = 'inviteStudents',
  TEACHER_CLASS_IDS = 'teacherClassesIds',
  FIELD_TRIP = 'fieldTrip',
  COUNTRY = 'country',
  PUBLIC_ACCESS = 'publicAccess',
  TAGS = 'tags',
  IMAGES = 'images',
  FILES = 'files',
  ASSIGNED_USERS = 'assignedUsers',
}

export type FormValues = {
  call_type?: string
  id?: string
  [FIELDS.DESCRIPTION]?: string
  [FIELDS.TITLE]?: string
  [FIELDS.DATE]?: string
  [FIELDS.START_TIME]?: string
  [FIELDS.END_TIME]?: string
  [FIELDS.PUBLIC_ACCESS]?: boolean
  [FIELDS.INVITE_STUDENTS]?: boolean
  [FIELDS.STUDENTS_AGE]?: Option
  [FIELDS.STUDENTS_LEVEL]?: Option
  [FIELDS.NUMBER_OF_TEACHERS]?: Option
  [FIELDS.TAGS]?: string
  [FIELDS.IMAGES]?: Array<File>
  [FIELDS.ASSIGNED_USERS]?: Array<number>
  [FIELDS.FILES]?: Array<File>
  [FIELDS.TEACHER_CLASS_IDS]?: string[] | []
  [FIELDS.FIELD_TRIP]?: boolean
  [FIELDS.COUNTRY]?: Option
}

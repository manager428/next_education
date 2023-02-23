import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

export interface IModalsState {
  readonly viewCallModal: {
    isOpen: boolean
    id?: number
  }

  readonly createCallModal: {
    isOpen: boolean
    type: string
  }

  readonly addBadgeModal: {
    isOpen: boolean
    userId?: number
  }

  readonly addStudentModal: {
    isOpen: boolean
  }

  readonly removeStudentModal: {
    isOpen: boolean
    selectedUser?: Record<string, any>
  }

  readonly changeStudentPasswordModal: {
    isOpen: boolean
    selectedUser?: {
      id: number
    }
  }

  readonly addCommentModal: {
    isOpen: boolean
    id?: number
  }

  readonly assignToClassModal: {
    isOpen: boolean
    selectedUser?: {
      id: number
      fullName: string
      classDetails: {
        className: string
      }
    }
  }

  readonly assignStudentsToClassModal: {
    isOpen: boolean
    userIds?: number[]
    className?: string
  }

  readonly updateYearOfBirthModal: {
    isOpen: boolean
    selectedUser?: {
      id: number
      fullName: string
      yearOfBirth?: string
    }
  }

  readonly addClassModal: {
    isOpen: boolean
  }

  readonly updateClassRoomModal: {
    isOpen: boolean
    classId: number | null
    className: string | null
    englishLevel: ENGLISH_LEVEL_ENUM | null
    classRoomLogo: string | null
  }

  readonly updateClassRoomLevelModal: {
    isOpen: boolean
    classRooms: {
      classId: number
      classLogo: string
      studentsCount: number
      classRoomName: string
    }[]
  }

  readonly deleteClassModal: {
    isOpen: boolean
    classId: number | null
    className: string | null
  }

  readonly assignStudentsToClassSelectorModal: {
    isOpen: boolean
    classId: number | null
    className: string | null
  }

  readonly deleteTeacherModal: {
    isOpen: boolean
    userId?: number
    avatar?: string
    fullName?: string
  }

  readonly schoolReassignClassToTeacherModal: {
    isOpen: boolean
    classIds: number[] | null
    classroomName?: string | null
  }

  readonly schoolReassignStudentTeacherModal: {
    isOpen: boolean
    userIds?: number[]
    avatar?: string
    fullName?: string
  }

  readonly schoolChangeStudentPassword: {
    isOpen: boolean
    userId?: number
  }

  readonly schoolDeleteStudentModal: {
    isOpen: boolean
    userId?: number
    avatar?: string
    fullName?: string
  }
}

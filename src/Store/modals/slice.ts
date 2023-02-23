/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CALL_ENUM } from 'Constants/calls'
import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

import { IModalsState } from './interfaces'

const initialState: IModalsState = {
  viewCallModal: {
    isOpen: false,
    id: undefined,
  },

  createCallModal: {
    isOpen: false,
    type: '',
  },

  addBadgeModal: {
    isOpen: false,
    userId: undefined,
  },

  addStudentModal: {
    isOpen: false,
  },

  removeStudentModal: {
    isOpen: false,
    selectedUser: undefined,
  },

  changeStudentPasswordModal: {
    isOpen: false,
    selectedUser: undefined,
  },

  addCommentModal: {
    isOpen: false,
    id: undefined,
  },

  assignToClassModal: {
    isOpen: false,
    selectedUser: undefined,
  },

  assignStudentsToClassModal: {
    isOpen: false,
    userIds: [],
    className: undefined,
  },

  updateYearOfBirthModal: {
    isOpen: false,
    selectedUser: undefined,
  },

  addClassModal: {
    isOpen: false,
  },

  updateClassRoomModal: {
    isOpen: false,
    className: null,
    classId: null,
    englishLevel: null,
    classRoomLogo: null,
  },

  updateClassRoomLevelModal: {
    isOpen: false,
    classRooms: [],
  },

  deleteClassModal: {
    isOpen: false,
    className: null,
    classId: null,
  },

  assignStudentsToClassSelectorModal: {
    isOpen: false,
    className: null,
    classId: null,
  },

  deleteTeacherModal: {
    isOpen: false,
  },

  schoolReassignClassToTeacherModal: {
    isOpen: false,
    classroomName: null,
    classIds: null,
  },

  schoolReassignStudentTeacherModal: {
    isOpen: false,
  },

  schoolChangeStudentPassword: {
    isOpen: false,
  },

  schoolDeleteStudentModal: {
    isOpen: false,
  },
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openViewCallModal: (state, action: PayloadAction<{ id: number }>) => {
      state.viewCallModal = {
        isOpen: true,
        id: action.payload.id,
      }
    },
    closeViewCallModal: state => {
      state.viewCallModal = {
        isOpen: false,
        id: undefined,
      }
    },
    openCreateCallModal: (
      state,
      action: PayloadAction<{ type: CALL_ENUM }>,
    ) => {
      state.createCallModal = {
        isOpen: true,
        type: action.payload.type,
      }
    },
    closeCreateCallModal: state => {
      state.createCallModal = {
        isOpen: false,
        type: '',
      }
    },
    openAddBadgeModal: (state, action: PayloadAction<{ userId: number }>) => {
      state.addBadgeModal = {
        isOpen: true,
        userId: action.payload.userId,
      }
    },
    closeAddBadgeModal: state => {
      state.addBadgeModal = {
        isOpen: false,
        userId: undefined,
      }
    },
    openRemoveStudentModal: (
      state,
      action: PayloadAction<{
        avatar: string
        id: number
        fullName: string
      }>,
    ) => {
      state.removeStudentModal = {
        isOpen: true,
        selectedUser: {
          ...action.payload,
        },
      }
    },
    closeRemoveStudentModal: state => {
      state.removeStudentModal.isOpen = false
      state.removeStudentModal.selectedUser = undefined
    },
    openChangeStudentPasswordModal: (
      state,
      action: PayloadAction<{ id: number }>,
    ) => {
      state.changeStudentPasswordModal = {
        isOpen: true,
        selectedUser: {
          id: action.payload.id,
        },
      }
    },
    closeChangeStudentPasswordModal: state => {
      state.changeStudentPasswordModal = {
        isOpen: false,
        selectedUser: undefined,
      }
    },
    openAddStudentModal: state => {
      state.addStudentModal.isOpen = true
    },
    closeAddStudentModal: state => {
      state.addStudentModal.isOpen = false
    },
    openAddCommentModal: (state, action: PayloadAction<{ id: number }>) => {
      state.addCommentModal = {
        isOpen: true,
        id: action.payload.id,
      }
    },
    closeAddCommentModal: state => {
      state.addCommentModal = {
        isOpen: false,
        id: undefined,
      }
    },
    openAssignToClassModal: (
      state,
      action: PayloadAction<{
        id: number
        fullName: string
        classDetails: {
          className: string
        }
      }>,
    ) => {
      state.assignToClassModal = {
        isOpen: true,
        selectedUser: {
          id: action.payload.id,
          fullName: action.payload.fullName,
          classDetails: {
            className: action.payload.classDetails.className,
          },
        },
      }
    },
    closeAssignToClassModal: state => {
      state.assignToClassModal = {
        isOpen: false,
        selectedUser: undefined,
      }
    },
    openUpdateYearOfBirthModal: (
      state,
      action: PayloadAction<{
        id: number
        fullName: string
        yearOfBirth?: string
      }>,
    ) => {
      state.updateYearOfBirthModal = {
        isOpen: true,
        selectedUser: {
          id: action.payload.id,
          fullName: action.payload.fullName,
          yearOfBirth: action.payload.yearOfBirth,
        },
      }
    },
    closeUpdateYearOfBirthModal: state => {
      state.updateYearOfBirthModal = {
        isOpen: false,
        selectedUser: undefined,
      }
    },
    openAddClassModal: state => {
      state.addClassModal.isOpen = true
    },
    closeAddClassModal: state => {
      state.addClassModal.isOpen = false
    },
    openAssignStudentsToClassModal: (
      state,
      action: PayloadAction<{ userIds: number[]; classroomName: string }>,
    ) => {
      state.assignStudentsToClassModal = {
        isOpen: true,
        className: action.payload.classroomName,
        userIds: action.payload.userIds,
      }
    },
    closeAssignStudentsToClassModal: state => {
      state.assignStudentsToClassModal = {
        isOpen: false,
        className: undefined,
        userIds: [],
      }
    },
    openUpdateClassRoomModal: (
      state,
      action: PayloadAction<{
        classroomName: string
        classId: number
        englishLevel: ENGLISH_LEVEL_ENUM | null
        classRoomLogo: string
      }>,
    ) => {
      state.updateClassRoomModal = {
        isOpen: true,
        className: action.payload.classroomName,
        classId: action.payload.classId,
        englishLevel: action.payload.englishLevel,
        classRoomLogo: action.payload.classRoomLogo,
      }
    },
    closeUpdateClassRoomModal: state => {
      state.updateClassRoomModal = {
        isOpen: false,
        className: null,
        classId: null,
        englishLevel: null,
        classRoomLogo: null,
      }
    },
    toggleUpdateClassRoomLevelModal: (
      state,
      action: PayloadAction<{
        isOpen: boolean
        classRooms: IModalsState['updateClassRoomLevelModal']['classRooms']
      }>,
    ) => {
      state.updateClassRoomLevelModal = {
        ...action.payload,
      }
    },

    openDeleteClassModal: (
      state,
      action: PayloadAction<{ classRoomName: string; classId: number }>,
    ) => {
      state.deleteClassModal = {
        isOpen: true,
        classId: action.payload.classId,
        className: action.payload.classRoomName,
      }
    },
    closeDeleteClassModal: state => {
      state.deleteClassModal = {
        isOpen: false,
        classId: null,
        className: null,
      }
    },
    openAssignStudentsToClassSelectorModal: (
      state,
      action: PayloadAction<{ classId: number; classRoomName: string }>,
    ) => {
      state.assignStudentsToClassSelectorModal = {
        isOpen: true,
        classId: action.payload.classId,
        className: action.payload.classRoomName,
      }
    },
    closeAssignStudentsToClassSelectorModal: state => {
      state.assignStudentsToClassSelectorModal = {
        isOpen: false,
        classId: null,
        className: null,
      }
    },
    openDeleteTeacherModal: (
      state,
      action: PayloadAction<{
        userId: number
        fullName: string
        avatar: string
      }>,
    ) => {
      state.deleteTeacherModal = {
        isOpen: true,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        avatar: action.payload.avatar,
      }
    },
    closeDeleteTeacherModal: state => {
      state.deleteTeacherModal = {
        isOpen: false,
        userId: undefined,
        fullName: undefined,
        avatar: undefined,
      }
    },
    openSchoolReassignClassToTeacherModal: (
      state,
      action: PayloadAction<{ classIds: number[]; classroomName?: string }>,
    ) => {
      state.schoolReassignClassToTeacherModal = {
        isOpen: true,
        classIds: action.payload.classIds,
        classroomName: action.payload.classroomName,
      }
    },
    closeSchoolReassignClassToTeacherModal: state => {
      state.schoolReassignClassToTeacherModal = {
        isOpen: false,
        classIds: [],
        classroomName: null,
      }
    },
    openSchoolReassignStudentTeacherModal: (
      state,
      action: PayloadAction<{
        userIds: number[]
        fullName?: string
        avatar?: string
      }>,
    ) => {
      state.schoolReassignStudentTeacherModal = {
        isOpen: true,
        userIds: action.payload.userIds,
        fullName: action.payload.fullName,
        avatar: action.payload.avatar,
      }
    },
    closeSchoolReassignStudentTeacherModal: state => {
      state.schoolReassignStudentTeacherModal = {
        isOpen: false,
        userIds: [],
        fullName: undefined,
        avatar: undefined,
      }
    },
    openSchoolChangeStudentPasswordModal: (
      state,
      action: PayloadAction<{ userId: number }>,
    ) => {
      state.schoolChangeStudentPassword = {
        isOpen: true,
        userId: action.payload.userId,
      }
    },
    closeSchoolChangeStudentPasswordModal: state => {
      state.schoolChangeStudentPassword = {
        isOpen: false,
        userId: undefined,
      }
    },
    openSchoolDeleteStudentModal: (
      state,
      action: PayloadAction<{
        userId: number
        fullName: string
        avatar: string
      }>,
    ) => {
      state.schoolDeleteStudentModal = {
        isOpen: true,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        avatar: action.payload.avatar,
      }
    },
    closeSchoolDeleteStudentModal: state => {
      state.schoolDeleteStudentModal = {
        isOpen: false,
        userId: undefined,
        fullName: undefined,
        avatar: undefined,
      }
    },
  },
})

export const {
  openViewCallModal,
  closeViewCallModal,
  openCreateCallModal,
  closeCreateCallModal,
  openAddBadgeModal,
  closeAddBadgeModal,
  openRemoveStudentModal,
  closeRemoveStudentModal,
  openChangeStudentPasswordModal,
  closeChangeStudentPasswordModal,
  openAddStudentModal,
  closeAddStudentModal,
  openAddCommentModal,
  closeAddCommentModal,
  openAssignToClassModal,
  closeAssignToClassModal,
  openUpdateYearOfBirthModal,
  closeUpdateYearOfBirthModal,
  openAddClassModal,
  closeAddClassModal,
  openAssignStudentsToClassModal,
  closeAssignStudentsToClassModal,
  openUpdateClassRoomModal,
  closeUpdateClassRoomModal,
  openDeleteClassModal,
  closeDeleteClassModal,
  openAssignStudentsToClassSelectorModal,
  closeAssignStudentsToClassSelectorModal,
  openDeleteTeacherModal,
  closeDeleteTeacherModal,
  openSchoolReassignClassToTeacherModal,
  closeSchoolReassignClassToTeacherModal,
  openSchoolReassignStudentTeacherModal,
  closeSchoolReassignStudentTeacherModal,
  openSchoolChangeStudentPasswordModal,
  closeSchoolChangeStudentPasswordModal,
  openSchoolDeleteStudentModal,
  closeSchoolDeleteStudentModal,
  toggleUpdateClassRoomLevelModal,
} = modalsSlice.actions

export default modalsSlice.reducer

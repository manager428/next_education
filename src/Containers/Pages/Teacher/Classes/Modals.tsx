import React, { useCallback } from 'react'

import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'

import {
  AddClassModal,
  AddStudentModal,
  AssignStudentsToClassModal,
  AssignStudentsToClassSelectorModal,
  AssignStudentToClassModal,
  ChangeStudentPasswordModal,
  DeleteClassModal,
  RemoveStudentModal,
  UpdateClassRoomModal,
  UpdateUserDateOfBirthModal,
} from 'Components/Blocks/Entities/Teacher/Modals'

import { TEACHER_PATHS } from 'Constants/paths'

import { useAppDispatch, useAppSelector } from 'Hooks/useStore'

import {
  closeAddClassModal,
  closeAddStudentModal,
  closeAssignStudentsToClassModal,
  closeAssignStudentsToClassSelectorModal,
  closeAssignToClassModal,
  closeChangeStudentPasswordModal,
  closeDeleteClassModal,
  closeRemoveStudentModal,
  closeUpdateClassRoomModal,
  closeUpdateYearOfBirthModal,
} from 'Store/modals/slice'

import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

const Modals = ({ onMutate }: { onMutate: () => void }) => {
  const { mutate: mutateBase } = useSWRConfig()
  const router = useRouter()

  const dispatch = useAppDispatch()
  const modalState = useAppSelector(state => state.modals)

  const handleRedirectToClasses = () => {
    router.push(TEACHER_PATHS.CLASSES())
    mutateBase(TEACHER_API_PATHS.classes)
  }

  const handleSuccessAddStudentModal = useCallback(() => {
    dispatch(closeAddStudentModal())
    onMutate()
  }, [dispatch])

  const handleSuccessAddClassModal = useCallback(
    classroomId => {
      dispatch(closeAddClassModal())
      router.push(TEACHER_PATHS.CLASSES(classroomId))
    },
    [dispatch, router],
  )
  return (
    <>
      {modalState.assignStudentsToClassSelectorModal.isOpen && (
        <AssignStudentsToClassSelectorModal
          isOpen
          onCloseModal={() =>
            dispatch(closeAssignStudentsToClassSelectorModal())
          }
          onSuccess={onMutate}
        />
      )}

      {modalState.assignStudentsToClassModal.isOpen && (
        <AssignStudentsToClassModal
          isOpen
          onCloseModal={() => dispatch(closeAssignStudentsToClassModal())}
          onSuccess={onMutate}
        />
      )}

      {modalState.updateClassRoomModal.isOpen && (
        <UpdateClassRoomModal
          isOpen
          onCloseModal={() => dispatch(closeUpdateClassRoomModal())}
          onSuccess={() => {
            mutateBase(TEACHER_API_PATHS.classes)
            onMutate()
          }}
        />
      )}

      {modalState.addClassModal.isOpen && (
        <AddClassModal
          isOpen
          onCloseModal={() => dispatch(closeAddClassModal())}
          onSuccess={handleSuccessAddClassModal}
        />
      )}

      {modalState.deleteClassModal.isOpen && (
        <DeleteClassModal
          isOpen
          onCloseModal={() => dispatch(closeDeleteClassModal())}
          onSuccess={handleRedirectToClasses}
        />
      )}

      {modalState.assignToClassModal.isOpen && (
        <AssignStudentToClassModal
          isOpen
          onCloseModal={() => dispatch(closeAssignToClassModal())}
          onSuccess={onMutate}
        />
      )}

      {modalState.updateYearOfBirthModal.isOpen && (
        <UpdateUserDateOfBirthModal
          isOpen
          onCloseModal={() => dispatch(closeUpdateYearOfBirthModal())}
          onSuccess={onMutate}
        />
      )}

      {modalState.addStudentModal.isOpen && (
        <AddStudentModal
          isOpen
          onCloseModal={() => dispatch(closeAddStudentModal())}
          onSuccess={handleSuccessAddStudentModal}
        />
      )}

      {modalState.removeStudentModal.isOpen &&
        modalState.removeStudentModal?.selectedUser?.id && (
          <RemoveStudentModal
            isOpen
            selectedUser={modalState.removeStudentModal.selectedUser}
            onCloseModal={() => dispatch(closeRemoveStudentModal())}
            onSuccess={onMutate}
          />
        )}

      {modalState.changeStudentPasswordModal.isOpen &&
        modalState.changeStudentPasswordModal?.selectedUser?.id && (
          <ChangeStudentPasswordModal
            isOpen
            selectedUser={modalState.changeStudentPasswordModal.selectedUser}
            onCloseModal={() => dispatch(closeChangeStudentPasswordModal())}
          />
        )}
    </>
  )
}

export default Modals

import dynamic from 'next/dynamic'

const AddClassModal = dynamic(() => import('./AddClassModal'), {})

const AddStudentModal = dynamic(() => import('./AddStudentModal'), {})

const AssignStudentsToClassModal = dynamic(
  () => import('./AssignStudentsToClassModal'),
  {},
)

const AssignStudentsToClassSelectorModal = dynamic(
  () => import('./AssignStudentsToClassSelectorModal'),
  {},
)

const AssignStudentToClassModal = dynamic(
  () => import('./AssignStudentToClassModal'),
  {},
)

const DeleteClassModal = dynamic(() => import('./DeleteClassModal'), {})

const ChangeStudentPasswordModal = dynamic(
  () => import('./ChangeStudentPasswordModal'),
  {},
)

const RemoveStudentModal = dynamic(() => import('./RemoveStudentModal'), {})

const UpdateClassRoomLevelModal = dynamic(
  () => import('./UpdateClassRoomLevelModal'),
  {},
)

const UpdateClassRoomModal = dynamic(() => import('./UpdateClassRoomModal'), {})

const UpdateUserDateOfBirthModal = dynamic(
  () => import('./UpdateUserDateOfBirthModal'),
  {},
)

export {
  AddClassModal,
  AddStudentModal,
  AssignStudentsToClassModal,
  AssignStudentsToClassSelectorModal,
  AssignStudentToClassModal,
  ChangeStudentPasswordModal,
  DeleteClassModal,
  RemoveStudentModal,
  UpdateClassRoomLevelModal,
  UpdateClassRoomModal,
  UpdateUserDateOfBirthModal,
}

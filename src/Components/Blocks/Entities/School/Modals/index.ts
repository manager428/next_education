import dynamic from 'next/dynamic'

const ChangeStudentPasswordModal = dynamic(
  () => import('./ChangeStudentPasswordModal'),
  {},
)

const DeleteStudentModal = dynamic(() => import('./DeleteStudentModal'), {})

const DeleteTeacherModal = dynamic(() => import('./DeleteTeacherModal'), {})

const ReassignClassToTeacherModal = dynamic(
  () => import('./ReassignClassToTeacher'),
  {},
)

const ReassignStudentTeacherModal = dynamic(
  () => import('./ReassignStudentTeacher'),
  {},
)

export {
  ChangeStudentPasswordModal,
  DeleteStudentModal,
  DeleteTeacherModal,
  ReassignClassToTeacherModal,
  ReassignStudentTeacherModal,
}

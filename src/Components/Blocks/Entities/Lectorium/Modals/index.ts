import dynamic from 'next/dynamic'

const LectoriumSuccessModal = dynamic(
  () => import('./LectoriumSuccessModal'),
  {},
)
const LectoriumVideoStudentsModal = dynamic(
  () => import('./LectoriumVideoStudentsModal'),
  {},
)

export { LectoriumSuccessModal, LectoriumVideoStudentsModal }

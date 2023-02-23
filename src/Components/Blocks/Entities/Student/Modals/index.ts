import dynamic from 'next/dynamic'

const UpdateYearOfBirthModal = dynamic(
  () => import('./UpdateYearOfBirthModal'),
  {},
)

export { UpdateYearOfBirthModal }

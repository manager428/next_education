import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolTeacherClassroomsContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Teacher/Classrooms'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolTeacherStudents: NextPage = () => (
  <SchoolTeacherClassroomsContainer />
)

export default withAuthSync(SchoolTeacherStudents)

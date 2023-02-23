import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolTeacherClassroomContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Teacher/Classroom'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolTeacherClassroom: NextPage = () => (
  <SchoolTeacherClassroomContainer />
)

export default withAuthSync(SchoolTeacherClassroom)

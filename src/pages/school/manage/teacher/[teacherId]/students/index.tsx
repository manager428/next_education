import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolTeacherStudentsContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Teacher/Students'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolTeacherStudents: NextPage = () => <SchoolTeacherStudentsContainer />

export default withAuthSync(SchoolTeacherStudents)

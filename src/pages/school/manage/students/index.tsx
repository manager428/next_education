import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolStudentsContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Students'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolStudents: NextPage = () => <SchoolStudentsContainer />

export default withAuthSync(SchoolStudents)

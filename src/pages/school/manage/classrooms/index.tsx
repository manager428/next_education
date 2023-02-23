import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolClassroomsContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Classrooms'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolClassrooms: NextPage = () => <SchoolClassroomsContainer />

export default withAuthSync(SchoolClassrooms)

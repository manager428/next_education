import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolTeachersContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Teachers'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolTeachers: NextPage = () => <SchoolTeachersContainer />

export default withAuthSync(SchoolTeachers)

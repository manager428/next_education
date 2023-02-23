import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const TeacherManageContainer = dynamic(
  () => import('Containers/Pages/Teacher/Manage'),
  {
    ssr: false,
    loading: Loader,
  },
)

const TeacherManage: NextPage = () => <TeacherManageContainer />

export default withAuthSync(TeacherManage)

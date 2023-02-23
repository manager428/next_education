import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const StudentsFriendsContainer = dynamic(
  () => import('Containers/Pages/Student/Friends'),
  {
    ssr: false,
    loading: Loader,
  },
)

const Friends: NextPage = () => <StudentsFriendsContainer />

export default withAuthSync(Friends)

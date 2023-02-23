import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const TeacherFriendsContainer = dynamic(
  () => import('Containers/Pages/Teacher/TeacherFriends'),
  {
    ssr: false,
    loading: Loader,
  },
)

const Friends: NextPage = () => <TeacherFriendsContainer />

export default withAuthSync(Friends)

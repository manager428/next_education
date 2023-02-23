import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const TeacherPublicFriendsContainer = dynamic(
  () => import('Containers/Pages/Teacher/TeacherPublicFriends'),
  {
    ssr: false,
    loading: Loader,
  },
)

const TeacherPublicFriends: NextPage = () => <TeacherPublicFriendsContainer />

export default withAuthSync(TeacherPublicFriends)

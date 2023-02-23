import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const UsersContainerNoSSR = dynamic(
  () => import('Containers/Pages/Moderator/Manage/Users'),
  { ssr: false, loading: Loader },
)

const Users: NextPage = () => <UsersContainerNoSSR />

export default withAuthSync(Users)

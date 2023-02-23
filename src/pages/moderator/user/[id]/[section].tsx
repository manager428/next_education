import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const UserContainerNoSSR = dynamic(
  () => import('Containers/Pages/Moderator/User'),
  { ssr: false, loading: Loader },
)

const User: NextPage = () => <UserContainerNoSSR />

export default withAuthSync(User)

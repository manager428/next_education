import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const NotificationsContainer = dynamic(
  () => import('Containers/Pages/Notifications'),
  {
    ssr: false,
    loading: Loader,
  },
)

const Notifications: NextPage = () => <NotificationsContainer />

export default withAuthSync(Notifications)

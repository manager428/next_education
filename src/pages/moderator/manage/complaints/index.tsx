import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const ComplaintsNoSSR = dynamic(
  () => import('Containers/Pages/Moderator/Manage/Complaints'),
  { ssr: false, loading: Loader },
)

const Complaints: NextPage = () => <ComplaintsNoSSR />

export default withAuthSync(Complaints)

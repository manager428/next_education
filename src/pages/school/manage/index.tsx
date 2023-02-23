import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolManageOverviewContainer = dynamic(
  () => import('Containers/Pages/School/Manage/Overview'),
  {
    ssr: false,
    loading: Loader,
  },
)

const SchoolManageOverview: NextPage = () => <SchoolManageOverviewContainer />

export default withAuthSync(SchoolManageOverview)

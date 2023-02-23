import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SchoolSettingsContainer = dynamic(
  () => import('Containers/Pages/School/Settings'),
  {
    ssr: false,
    loading: Loader,
  },
)

const Settings: NextPage = () => <SchoolSettingsContainer />

export default withAuthSync(Settings)

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const SettingsContainer = dynamic(() => import('Containers/Pages/Settings'), {
  ssr: false,
  loading: Loader,
})

const Settings: NextPage = () => <SettingsContainer />

export default withAuthSync(Settings)

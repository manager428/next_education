import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const CallsContainer = dynamic(() => import('Containers/Pages/Calls'), {
  ssr: false,
  loading: Loader,
})

const Calls: NextPage = () => <CallsContainer />

export default withAuthSync(Calls)

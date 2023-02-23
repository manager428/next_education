import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

const CallContainer = dynamic(() => import('Containers/Pages/Call'), {
  ssr: false,
  loading: Loader,
})

const Call: NextPage = () => <CallContainer />

export default Call

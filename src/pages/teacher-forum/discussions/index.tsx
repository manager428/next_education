import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const DiscussionsContainer = dynamic(
  () => import('Containers/Pages/CallsDiscussions'),
  {
    ssr: false,
    loading: Loader,
  },
)

const CallsDiscussions: NextPage = () => <DiscussionsContainer />

export default withAuthSync(CallsDiscussions)

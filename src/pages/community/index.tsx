import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const CommunityContainerNoSSR = dynamic(
  () => import('Containers/Pages/Community'),
  { ssr: false, loading: Loader },
)

const Community: NextPage = () => <CommunityContainerNoSSR />

export default withAuthSync(Community)

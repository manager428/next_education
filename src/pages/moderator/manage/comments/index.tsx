import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const CommentsContainerNoSSR = dynamic(
  () => import('Containers/Pages/Moderator/Manage/Comments'),
  { ssr: false, loading: Loader },
)

const Comments: NextPage = () => <CommentsContainerNoSSR />

export default withAuthSync(Comments)

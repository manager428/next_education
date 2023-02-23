import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const ChatContainer = dynamic(() => import('Containers/Pages/Chat'), {
  ssr: false,
  loading: Loader,
})

const Chat: NextPage = () => <ChatContainer />

export default withAuthSync(Chat)

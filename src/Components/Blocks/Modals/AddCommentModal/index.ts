import dynamic from 'next/dynamic'

import Loader from 'Components/UI/Loader'

const dynamicModalNoSSR = dynamic(() => import('./AddCommentModal'), {
  ssr: false,
  loading: Loader,
})

export default dynamicModalNoSSR

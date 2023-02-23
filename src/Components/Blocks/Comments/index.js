import dynamic from 'next/dynamic'

import CommentsList from './CommentsList'

const CommentForm = dynamic(() => import('./CommentForm'), {
  ssr: false,
})

export { CommentForm, CommentsList }

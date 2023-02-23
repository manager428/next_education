import dynamic from 'next/dynamic'

const AddBadgeModal = dynamic(() => import('./AddBadgeModal'), {})
const AddCommentModal = dynamic(() => import('./AddCommentModal'), {})
const BadgeModal = dynamic(() => import('./BadgeModal'), {})
const ShareModal = dynamic(() => import('./ShareModal'), {})
const TagsModal = dynamic(() => import('./TagsModal'), {})
const VideoModal = dynamic(() => import('./VideoModal'), {})

export {
  AddBadgeModal,
  AddCommentModal,
  BadgeModal,
  ShareModal,
  TagsModal,
  VideoModal,
}

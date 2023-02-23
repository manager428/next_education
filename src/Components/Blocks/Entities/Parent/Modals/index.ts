import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

const AddChildModal = dynamic(() => import('./AddChildModal'), {
  loading: Loader,
})

const ChangePasswordModal = dynamic(() => import('./ChangePasswordModal'), {
  loading: Loader,
})

const DeleteChildModal = dynamic(() => import('./DeleteChildModal'), {
  loading: Loader,
})

const SubscriptionExpiredModal = dynamic(
  () => import('./SubscriptionExpiredModal'),
  {
    loading: Loader,
  },
)

export {
  AddChildModal,
  ChangePasswordModal,
  DeleteChildModal,
  SubscriptionExpiredModal,
}

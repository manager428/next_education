import dynamic from 'next/dynamic'

const BanUserModal = dynamic(() => import('./BanUserModal'), {})

const BlockUserModal = dynamic(() => import('./BlockUserModal'), {})

const EditCommentModal = dynamic(() => import('./EditCommentModal'), {})

const WarningModal = dynamic(() => import('./WarningModal'), {})

export { BanUserModal, BlockUserModal, EditCommentModal, WarningModal }

import dynamic from 'next/dynamic'

const CreateCallModal = dynamic(() => import('./CreateCallModal'), {})

const ViewCallModal = dynamic(() => import('./ViewCallModal'), {})

export { CreateCallModal, ViewCallModal }

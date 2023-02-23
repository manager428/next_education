import dynamic from 'next/dynamic'

const CreateDebateModal = dynamic(() => import('./CreateDebateModal'), {})
const DebateSuccessModal = dynamic(() => import('./DebateSuccessModal'), {})

export { CreateDebateModal, DebateSuccessModal }

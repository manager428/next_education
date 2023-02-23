import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const ComplaintContainer = dynamic(() => import('Containers/Pages/Complaint'), {
  loading: Loader,
})

const Complaint: NextPage = () => <ComplaintContainer />

export default withAuthSync(Complaint)

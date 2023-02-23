import { NextPage } from 'next'

import RegistrationFormContainer from 'Containers/Pages/RegistrationForm'

type Props = {
  initialData: any
}

const RegistrationForm: NextPage<Props> = () => <RegistrationFormContainer />

export default RegistrationForm

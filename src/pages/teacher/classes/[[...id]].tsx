import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Loader } from 'Components/UI'

import { withAuthSync } from 'Services/Auth'

const TeacherClassesContainer = dynamic(
  () => import('Containers/Pages/Teacher/Classes'),
  {
    ssr: false,
    loading: Loader,
  },
)

const TeacherClasses: NextPage = () => <TeacherClassesContainer />

export default withAuthSync(TeacherClasses)

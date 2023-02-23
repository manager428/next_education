import React from 'react'

import { useRouter } from 'next/router'

import includes from 'lodash/includes'

import Header from 'Components/Blocks/Header'

import { LANDING_PATHS } from 'Constants/paths'

import useRole from 'Hooks/useRole'

import { StudentModals, TeacherModals } from './Modals'
import { Container } from './styles'

const HIDE_HEADER_ROUTES = [
  '/registration-form',
  '/',
  LANDING_PATHS.PARENTS,
  LANDING_PATHS.EDUCATORS,
  LANDING_PATHS.PARTNERS,
  LANDING_PATHS.PRINCIPLES,
]

const Main: React.FC = ({ children }) => {
  const router = useRouter()
  const { isTeacher, isStudent } = useRole()

  const isShowHeader = !includes(HIDE_HEADER_ROUTES, router.pathname)

  return (
    <Container>
      {isShowHeader && <Header />}

      {children}

      {isTeacher && <TeacherModals />}
      {isStudent && <StudentModals />}
    </Container>
  )
}

export default Main

import React from 'react'

import { ManageHeader, ManageLinks } from 'Components/Blocks/Entities/School'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import useSwrRequest from 'Hooks/useSwrRequest'

import { ISchoolDetails } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import useRender from './Hooks/useRender'
import { Background, Container } from './styles'

const Overview = () => {
  const me = useMe()
  const schoolId = me?.school?.id

  const { data, isLoading } = useSwrRequest<ISchoolDetails>({
    url: schoolId ? SCHOOL_API_PATHS.schoolDetails(schoolId) : null,
  })

  const { renderContent } = useRender({
    isLoading,
    code: data?.code,
    studentsCount: data?.students_count,
    classroomsCount: data?.classes_count,
    teachersCount: data?.teachers_count,
  })

  return (
    <Background>
      <Head description="School Manage" title="School Manage" />

      <ManageHeader />

      <Container flexWrap="wrap" mt={40} pb={60} pt={44}>
        <ManageLinks />

        {renderContent()}
      </Container>

      <Footer />
    </Background>
  )
}

export default Overview

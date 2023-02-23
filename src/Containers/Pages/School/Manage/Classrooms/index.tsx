import React, { useCallback, useState } from 'react'

import { Flex, SearchInput } from 'Components/UI'

import { ManageHeader, ManageLinks } from 'Components/Blocks/Entities/School'
import { ReassignClassToTeacherModal } from 'Components/Blocks/Entities/School/Modals'
import { ClassRoomsTable } from 'Components/Blocks/Entities/School/Tables'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import { closeSchoolReassignClassToTeacherModal } from 'Store/modals/slice'

import { ISchoolClassroomsResponse } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import { Background, Container } from './styles'

const Classrooms = () => {
  const dispatch = useAppDispatch()
  const me = useMe()
  const schoolId = me?.school?.id

  const modalState = useAppSelector(state => state.modals)

  const [paginationQuery, setPaginationQuery] = useState({
    page: 1,
    order: 'asc',
    search: null,
  })

  const { isLoading, data, mutate } = useSwrRequest<ISchoolClassroomsResponse>({
    url: schoolId ? SCHOOL_API_PATHS.schoolClassrooms(schoolId) : null,
    query: paginationQuery,
  })

  const handleFetch = ({ sortBy, pageIndex }) => {
    const order = sortBy[0]?.desc ? 'desc' : 'asc'

    setPaginationQuery(prevState => ({
      ...prevState,
      page: pageIndex + 1,
      order,
    }))
  }

  const handleSearch = useCallback(
    value => {
      setPaginationQuery(prevState => ({ ...prevState, search: value }))
    },
    [setPaginationQuery],
  )

  return (
    <Background>
      <Head description="School Classrooms" title="School Classrooms" />
      <ManageHeader />

      <Container flexWrap="wrap" mb={20} pb={60} pt={44}>
        <ManageLinks />

        <Flex maxWidth={480} mt={35} width={1}>
          <SearchInput placeholder="Search..." onChange={handleSearch} />
        </Flex>

        <Flex mt={24} width={1}>
          <ClassRoomsTable
            data={data}
            isLoading={isLoading}
            onFetch={handleFetch}
          />
        </Flex>
      </Container>

      <Footer />

      {modalState.schoolReassignClassToTeacherModal.isOpen && (
        <ReassignClassToTeacherModal
          onCloseModal={() =>
            dispatch(closeSchoolReassignClassToTeacherModal())
          }
          onSuccess={() => mutate()}
        />
      )}
    </Background>
  )
}

export default Classrooms

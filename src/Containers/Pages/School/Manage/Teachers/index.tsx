import React, { useCallback, useState } from 'react'

import { Flex, SearchInput } from 'Components/UI'

import ManageHeader from 'Components/Blocks/Entities/School/ManageHeader'
import ManageLinks from 'Components/Blocks/Entities/School/ManageLinks'
import { DeleteTeacherModal } from 'Components/Blocks/Entities/School/Modals'
import TeachersTable from 'Components/Blocks/Entities/School/Tables/TeachersTable'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import { closeDeleteTeacherModal } from 'Store/modals/slice'

import { ISchoolTeachersResponse } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import { Background, Container } from './styles'

const Teachers = () => {
  const dispatch = useAppDispatch()
  const me = useMe()
  const schoolId = me?.school?.id

  const modalState = useAppSelector(state => state.modals)

  const [paginationQuery, setPaginationQuery] = useState({
    page: 1,
    order: 'asc',
    search: null,
  })

  const { isLoading, data, mutate } = useSwrRequest<ISchoolTeachersResponse>({
    url: schoolId ? SCHOOL_API_PATHS.schoolTeachers(schoolId) : null,
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
      <Head description="School Teachers" title="School Teachers" />

      <ManageHeader />

      <Container flexWrap="wrap" mt={40} pb={60} pt={44}>
        <ManageLinks />

        <Flex maxWidth={480} mt={35} width={1}>
          <SearchInput placeholder="Search..." onChange={handleSearch} />
        </Flex>

        <Flex mt={24} width={1}>
          <TeachersTable
            data={data}
            isLoading={isLoading}
            onFetch={handleFetch}
          />
        </Flex>
      </Container>

      <Footer />

      {modalState.deleteTeacherModal.isOpen && (
        <DeleteTeacherModal
          onCloseModal={() => dispatch(closeDeleteTeacherModal())}
          onSuccess={() => mutate()}
        />
      )}
    </Background>
  )
}

export default Teachers

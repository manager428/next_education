import React, { useCallback, useState } from 'react'

import { Flex, SearchInput } from 'Components/UI'

import { ManageHeader, ManageLinks } from 'Components/Blocks/Entities/School'
import {
  ChangeStudentPasswordModal,
  DeleteStudentModal,
  ReassignStudentTeacherModal,
} from 'Components/Blocks/Entities/School/Modals'
import StudentsTable from 'Components/Blocks/Entities/School/Tables/StudentsTable'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  closeSchoolChangeStudentPasswordModal,
  closeSchoolDeleteStudentModal,
  closeSchoolReassignStudentTeacherModal,
} from 'Store/modals/slice'

import { ISchoolStudentsResponse } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import { Background, Container } from './styles'

const Students = () => {
  const dispatch = useAppDispatch()
  const me = useMe()
  const schoolId = me?.school?.id

  const modalState = useAppSelector(state => state.modals)

  const [paginationQuery, setPaginationQuery] = useState({
    page: 1,
    order: 'asc',
    search: null,
  })

  const { isLoading, data, mutate } = useSwrRequest<ISchoolStudentsResponse>({
    url: schoolId ? SCHOOL_API_PATHS.schoolStudents(schoolId) : null,
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
      <Head description="School Students" title="School Students" />

      <ManageHeader />

      <Container flexWrap="wrap" mt={40} pb={60} pt={44}>
        <ManageLinks />

        <Flex maxWidth={480} mt={35} width={1}>
          <SearchInput placeholder="Search..." onChange={handleSearch} />
        </Flex>

        <Flex mt={24} width={1}>
          <StudentsTable
            data={data}
            isLoading={isLoading}
            onFetch={handleFetch}
          />
        </Flex>
      </Container>

      <Footer />

      {modalState.schoolDeleteStudentModal.isOpen && (
        <DeleteStudentModal
          onCloseModal={() => dispatch(closeSchoolDeleteStudentModal())}
          onSuccess={() => mutate()}
        />
      )}

      {modalState.schoolChangeStudentPassword.isOpen && (
        <ChangeStudentPasswordModal
          onCloseModal={() => dispatch(closeSchoolChangeStudentPasswordModal())}
        />
      )}

      {modalState.schoolReassignStudentTeacherModal.isOpen && (
        <ReassignStudentTeacherModal
          onCloseModal={() =>
            dispatch(closeSchoolReassignStudentTeacherModal())
          }
          onSuccess={() => mutate()}
        />
      )}
    </Background>
  )
}

export default Students

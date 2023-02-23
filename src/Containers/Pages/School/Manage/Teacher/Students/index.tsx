import React, { useCallback, useState } from 'react'

import { editPencilGlyph } from 'Assets/svg/common'

import useSelectStudents from 'Containers/Pages/School/Manage/Teacher/Students/Hooks/useSelectStudents'

import { Element, Flex, Icon, SearchInput } from 'Components/UI'

import {
  ChangeStudentPasswordModal,
  DeleteStudentModal,
  ReassignStudentTeacherModal,
} from 'Components/Blocks/Entities/School/Modals'
import StudentsTable from 'Components/Blocks/Entities/School/Tables/TeacherStudentsTable'
import Header from 'Components/Blocks/Entities/School/Teacher/Header'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import useLocationQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  closeSchoolChangeStudentPasswordModal,
  closeSchoolDeleteStudentModal,
  closeSchoolReassignStudentTeacherModal,
} from 'Store/modals/slice'

import { ISchoolTeacherStudentsResponse } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import { theme } from 'Theme'

import { Background, Container, Content, Text } from './styles'

const Students = () => {
  const me = useMe()
  const locationParams = useLocationQueryParams()
  const dispatch = useAppDispatch()

  const schoolId = me?.school?.id
  const teacherId = locationParams.teacherId ? +locationParams.teacherId : 0

  const modalState = useAppSelector(state => state.modals)

  const [paginationQuery, setPaginationQuery] = useState({
    page: 1,
    order: 'asc',
    search: null,
  })

  const {
    isLoading,
    data,
    mutate,
  } = useSwrRequest<ISchoolTeacherStudentsResponse>({
    url: schoolId
      ? SCHOOL_API_PATHS.teacherStudents(schoolId, teacherId)
      : null,
    query: paginationQuery,
  })

  const {
    isSelectable,
    setSelectable,
    renderButtons,
    selectedIds,
    handleSelectStudent,
  } = useSelectStudents()

  const handleSearch = useCallback(
    value => {
      setPaginationQuery(prevState => ({ ...prevState, search: value }))
    },
    [setPaginationQuery],
  )

  const handleFetch = ({ sortBy, pageIndex }) => {
    const order = sortBy[0]?.desc ? 'desc' : 'asc'

    setPaginationQuery(prevState => ({
      ...prevState,
      page: pageIndex + 1,
      order,
    }))
  }

  return (
    <Background>
      <Head description="Teacher Overview" title="Teacher Overview" />

      <Container flexWrap="wrap" mt={40} pb={60} pt={44}>
        <Header title="Students & Classrooms" />
        <Content>
          <Flex justifyContent="space-between" mt={35} width={1}>
            <Flex maxWidth={480} width={1}>
              <SearchInput placeholder="Search..." onChange={handleSearch} />
            </Flex>

            {!isSelectable && (
              <Text onClick={() => setSelectable(true)}>
                <Icon
                  fill={theme.colors.grayMid}
                  icon={editPencilGlyph}
                  size={13}
                  wrapperStyles={{ mr: '6px' }}
                />
                <Element>Edit Students</Element>
              </Text>
            )}
          </Flex>

          <Flex width={1}>{renderButtons()}</Flex>

          <Flex mt={24} width={1}>
            <StudentsTable
              data={data}
              isLoading={isLoading}
              isSelectable={isSelectable}
              selectedIds={selectedIds}
              onFetch={handleFetch}
              onSelect={handleSelectStudent}
            />
          </Flex>
        </Content>
      </Container>

      <Footer />

      {modalState.schoolDeleteStudentModal.isOpen && (
        <DeleteStudentModal
          onCloseModal={() => dispatch(closeSchoolDeleteStudentModal())}
          onSuccess={mutate}
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
          onSuccess={mutate}
        />
      )}
    </Background>
  )
}

export default Students

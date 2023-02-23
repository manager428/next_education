import React, { useCallback, useState } from 'react'

import { editPencilGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon, SearchInput } from 'Components/UI'

import { ReassignClassToTeacherModal } from 'Components/Blocks/Entities/School/Modals'
import { TeacherClassroomsTable } from 'Components/Blocks/Entities/School/Tables'
import Header from 'Components/Blocks/Entities/School/Teacher/Header'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useMe from 'Hooks/useMe'
import useLocationQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import { closeSchoolReassignClassToTeacherModal } from 'Store/modals/slice'

import { ISchoolTeacherClassroomsResponse } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import { theme } from 'Theme'

import useSelectClassrooms from './Hooks/useSelectClassrooms'
import { Background, Container, Content, Text } from './styles'

const Classrooms = () => {
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
  } = useSwrRequest<ISchoolTeacherClassroomsResponse>({
    url: schoolId
      ? SCHOOL_API_PATHS.teacherClassrooms(schoolId, teacherId)
      : null,
    query: paginationQuery,
  })

  const {
    isSelectable,
    setSelectable,
    renderButtons,
    selectedIds,
    handleSelect,
  } = useSelectClassrooms()

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
                <Element>Edit Classrooms</Element>
              </Text>
            )}
          </Flex>

          <Flex width={1}>{renderButtons()}</Flex>

          <Flex mt={24} width={1}>
            <TeacherClassroomsTable
              data={data}
              isLoading={isLoading}
              isSelectable={isSelectable}
              selectedIds={selectedIds}
              onFetch={handleFetch}
              onSelect={handleSelect}
            />
          </Flex>
        </Content>
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

import React, { useCallback, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Flex, SearchInput } from 'Components/UI'

import ManageHeader from 'Components/Blocks/Entities/Teacher/ManageHeader'
import {
  AddClassModal,
  AddStudentModal,
  AssignStudentToClassModal,
  ChangeStudentPasswordModal,
  RemoveStudentModal,
  UpdateUserDateOfBirthModal,
} from 'Components/Blocks/Entities/Teacher/Modals'
import { StudentsTable } from 'Components/Blocks/Entities/Teacher/Tables'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { TEACHER_PATHS } from 'Constants/paths'

import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  closeAddClassModal,
  closeAddStudentModal,
  closeAssignToClassModal,
  closeChangeStudentPasswordModal,
  closeRemoveStudentModal,
  closeUpdateYearOfBirthModal,
  openAddStudentModal,
} from 'Store/modals/slice'

import { IStudentsResponse } from 'Services/Api/requests/teacher/interfaces'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import { AddIcon, AddNew, Background, Container, Tab } from './styles'

const Manage: React.FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const modalState = useAppSelector(state => state.modals)

  const [paginationQuery, setPaginationQuery] = useState({
    page: 1,
    order: 'asc',
    search: null,
  })

  const { isLoading, data, mutate } = useSwrRequest<IStudentsResponse>({
    url: TEACHER_API_PATHS.getStudents,
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

  const handleSuccessAddStudentModal = useCallback(() => {
    dispatch(closeAddStudentModal())
    mutate()
  }, [dispatch])

  const handleSearch = useCallback(
    value => {
      setPaginationQuery(prevState => ({ ...prevState, search: value }))
    },
    [setPaginationQuery],
  )

  const handleSuccessAddClassModal = useCallback(
    classroomId => {
      dispatch(closeAddClassModal())
      router.push(TEACHER_PATHS.CLASSES(classroomId))
    },
    [dispatch, router],
  )

  return (
    <Background>
      <Head description="Virtual Classroom" title="Virtual Classroom" />

      <ManageHeader />

      <Container pb={60} pt={44}>
        <Flex flexWrap="wrap" width={1}>
          <Flex alignItems="center" justifyContent="space-between" width={1}>
            <Flex>
              <Link href={TEACHER_PATHS.MANAGE} passHref>
                <Tab active>STUDENTS</Tab>
              </Link>

              <Link href={TEACHER_PATHS.CLASSES()} passHref>
                <Tab>CLASSROOMS</Tab>
              </Link>
            </Flex>

            <Flex maxWidth={500}>
              <SearchInput placeholder="Search..." onChange={handleSearch} />
              <AddNew ml={28} onClick={() => dispatch(openAddStudentModal())}>
                <AddIcon />
                Add New Student
              </AddNew>
            </Flex>
          </Flex>
          <Flex mt={24} width={1}>
            <StudentsTable
              data={data}
              isLoading={isLoading}
              onFetch={handleFetch}
            />
          </Flex>
        </Flex>
      </Container>

      <Footer />

      {modalState.addClassModal.isOpen && (
        <AddClassModal
          isOpen={modalState.addClassModal.isOpen}
          onCloseModal={() => dispatch(closeAddClassModal())}
          onSuccess={handleSuccessAddClassModal}
        />
      )}

      {modalState.assignToClassModal.isOpen && (
        <AssignStudentToClassModal
          isOpen
          onCloseModal={() => dispatch(closeAssignToClassModal())}
          onSuccess={() => mutate()}
        />
      )}

      {modalState.updateYearOfBirthModal.isOpen && (
        <UpdateUserDateOfBirthModal
          isOpen
          onCloseModal={() => dispatch(closeUpdateYearOfBirthModal())}
          onSuccess={() => mutate()}
        />
      )}

      {modalState.addStudentModal.isOpen && (
        <AddStudentModal
          isOpen
          onCloseModal={() => dispatch(closeAddStudentModal())}
          onSuccess={handleSuccessAddStudentModal}
        />
      )}

      {modalState.removeStudentModal.isOpen &&
        modalState.removeStudentModal?.selectedUser?.id && (
          <RemoveStudentModal
            isOpen
            selectedUser={modalState.removeStudentModal.selectedUser}
            onCloseModal={() => dispatch(closeRemoveStudentModal())}
            onSuccess={() => mutate()}
          />
        )}

      {modalState.changeStudentPasswordModal.isOpen &&
        modalState.changeStudentPasswordModal?.selectedUser?.id && (
          <ChangeStudentPasswordModal
            isOpen
            selectedUser={modalState.changeStudentPasswordModal.selectedUser}
            onCloseModal={() => dispatch(closeChangeStudentPasswordModal())}
          />
        )}
    </Background>
  )
}

export default Manage

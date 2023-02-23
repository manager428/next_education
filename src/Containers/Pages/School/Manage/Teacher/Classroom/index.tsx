import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Flex, SearchInput } from 'Components/UI'

import {
  ChangeStudentPasswordModal,
  DeleteStudentModal,
  ReassignClassToTeacherModal,
  ReassignStudentTeacherModal,
} from 'Components/Blocks/Entities/School/Modals'
import { ClassroomStudentsTable } from 'Components/Blocks/Entities/School/Tables'
import Header from 'Components/Blocks/Entities/School/Teacher/Classroom/Header'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { SCHOOL_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useLocationQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  closeSchoolChangeStudentPasswordModal,
  closeSchoolDeleteStudentModal,
  closeSchoolReassignClassToTeacherModal,
  closeSchoolReassignStudentTeacherModal,
  openSchoolReassignClassToTeacherModal,
} from 'Store/modals/slice'

import { ISchoolTeacherClassroomResponse } from 'Services/Api/requests/school/interfaces'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import { Background, Button, Container, Content } from './styles'

const Classroom = () => {
  const me = useMe()
  const locationParams = useLocationQueryParams()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [headerDetails, setHeaderDetails] = useState<{
    avatar?: string
    fullName?: string
    classroomName?: string
    classLogo?: string
  }>()

  const schoolId = me?.school?.id
  const teacherId = locationParams.teacherId ? +locationParams.teacherId : 0
  const classroomId = locationParams.classroomId
    ? +locationParams.classroomId
    : 0

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
  } = useSwrRequest<ISchoolTeacherClassroomResponse>({
    url: schoolId
      ? SCHOOL_API_PATHS.classroomStudents(schoolId, teacherId, classroomId)
      : null,
    query: paginationQuery,
  })

  useEffect(() => {
    if (headerDetails?.fullName) return

    setHeaderDetails({
      avatar: data?.teacher?.avatar,
      fullName: data?.teacher?.full_name,
      classroomName: data?.class?.class_name,
      classLogo: data?.class?.class_logo,
    })
  }, [data, headerDetails])

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

  const handleReassignClassToTeacher = () => {
    dispatch(
      openSchoolReassignClassToTeacherModal({
        classIds: [classroomId],
        classroomName: data?.class?.class_name,
      }),
    )
  }

  const handleReassignClassSuccess = () => {
    router.push(SCHOOL_PATHS.TEACHER_CLASSROOMS(teacherId))
  }

  return (
    <Background>
      <Head description="Teacher Overview" title="Teacher Overview" />
      <Container flexWrap="wrap" mt={40} pb={60} pt={44}>
        {headerDetails?.fullName && (
          <Header
            avatar={headerDetails?.avatar}
            classLogo={headerDetails?.classLogo}
            classroomName={headerDetails?.classroomName}
            fullname={headerDetails?.fullName}
          />
        )}

        <Content>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            mt={35}
            width={1}
          >
            <Flex maxWidth={480} width={1}>
              <SearchInput placeholder="Search..." onChange={handleSearch} />
            </Flex>
            <Flex>
              <Button onClick={handleReassignClassToTeacher}>
                Reassign Teacher
              </Button>
            </Flex>
          </Flex>

          <Flex mt={24} width={1}>
            <ClassroomStudentsTable
              data={data}
              isLoading={isLoading}
              onFetch={handleFetch}
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
          onSuccess={handleReassignClassSuccess}
        />
      )}
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

export default Classroom

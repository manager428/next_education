import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import Modals from 'Containers/Pages/Teacher/Classes/Modals'

import { Flex, Loader } from 'Components/UI'

import {
  ClassSelector,
  ClassStudents,
} from 'Components/Blocks/Entities/Teacher/Classes'
import ManageHeader from 'Components/Blocks/Entities/Teacher/ManageHeader'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { TEACHER_PATHS } from 'Constants/paths'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { ITeacherClass } from 'Services/Api/requests/teacher/interfaces'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import ListContext from './context'
import { Background, Container, Tab } from './styles'

const Classes: React.FC = () => {
  const params = useRouterQueryParams()

  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const classId = params?.id ? parseInt(params.id[0] as string, 10) : null

  const {
    data: classDetails,
    isLoading,
    mutate,
  } = useSwrRequest<ITeacherClass>({
    url: classId ? TEACHER_API_PATHS.getClassDetails(classId) : null,
  })

  const handleSelectStudent = (studentId: number) => {
    setSelectedIds(prevState => {
      if (prevState.includes(studentId)) {
        return prevState.filter(id => id !== studentId)
      }
      return [...prevState, studentId]
    })
  }

  useEffect(() => {
    setSelectedIds([])
  }, [classId])

  return (
    <Background>
      <Head description="Virtual Classroom" title="Virtual Classroom" />

      <Modals onMutate={mutate} />

      <ManageHeader />

      <Container flexWrap="wrap" mt={40} pb={60} pt={44}>
        <Flex flexWrap="wrap" width={1}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            minHeight={40}
            width={1}
          >
            <Flex>
              <Link href={TEACHER_PATHS.MANAGE} passHref>
                <Tab>STUDENTS</Tab>
              </Link>

              <Link href={TEACHER_PATHS.CLASSES()} passHref>
                <Tab active>CLASSROOMS</Tab>
              </Link>
            </Flex>
          </Flex>

          <ClassSelector />
        </Flex>

        <ListContext.Provider
          value={{
            onSelectStudent: handleSelectStudent,
          }}
        >
          {classId && (
            <Flex mt={32} position="relative" width={1}>
              {isLoading ? (
                <Loader />
              ) : (
                <ClassStudents data={classDetails} selectedIds={selectedIds} />
              )}
            </Flex>
          )}
        </ListContext.Provider>
      </Container>

      <Footer />
    </Background>
  )
}

export default Classes

import React, { useCallback, useMemo, useState } from 'react'

import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import toLower from 'lodash/toLower'

import { Element, Flex, SearchInput } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import useInfiniteScroll from 'Hooks/useInfiniteScroll'
import { useAppSelector } from 'Hooks/useStore'
import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import { teacherApi } from 'Services/Api/requests'
import { ITeacher } from 'Services/Api/requests/teacher/interfaces'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import { theme } from 'Theme'

import {
  Avatar,
  Button,
  ButtonsContainer,
  CheckBox,
  Content,
  Error,
  Modal,
  SelectAllContainer,
  StudentContainer,
  StudentsList,
  Title,
} from './styles'

type Props = {
  isOpen: boolean
  onCloseModal: () => void
  onSuccess: () => void
}

const AssignStudentsToClassSelectorModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [searchValue, setSearchValue] = useState('')

  const { classId, className } = useAppSelector(
    state => state.modals.assignStudentsToClassSelectorModal,
  )

  const {
    data: teacherStudents,
    isLoading: isStudentsLoading,
    setSize,
    size,
    isLoadingMore,
  } = useSwrInfinityRequest({
    url: TEACHER_API_PATHS.getStudents,
    query: {
      search: searchValue,
      exclude_class_ids: [classId],
    },
  })

  const studentsData = useMemo(
    () =>
      reduce(
        teacherStudents,
        (
          acc: {
            students: ITeacher[]
            lastPage: number
          },
          page: any,
        ) => {
          if (!acc.lastPage) {
            const lastPage = get(page, ['data', 'pagination', 'lastPage'], 0)
            acc.lastPage = lastPage
          }

          const pagePosts = get(page, ['data', 'students'], [])
          acc.students.push(...pagePosts)

          return acc
        },
        {
          students: [],
          lastPage: 0,
        },
      ),
    [teacherStudents],
  )

  const loadMoreStudents = async () => {
    const nextSize = size + 1

    if (nextSize <= studentsData.lastPage) {
      await setSize(nextSize)
    }
  }

  const [lastElementRef] = useInfiniteScroll(loadMoreStudents, isLoadingMore)

  const handleSubmit = async () => {
    setIsLoading(true)
    setResponseError([])

    try {
      await teacherApi.assignToClass({
        userIds: selectedUsers,
        classId: classId ?? 0,
      })
      onSuccess()
      onCloseModal()
    } catch (e) {
      const errors = get(e, ['data', 'errors']) || [
        'Something going wrong, please contact with support!',
      ]

      setResponseError(errors)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchChange = (value: string) => {
    setSize(1)
    setSearchValue(value)
  }

  const handleSelect = (user: ITeacher): void => {
    if (includes(selectedUsers, user.id)) {
      setSelectedUsers(prevState => filter(prevState, it => it !== user.id))
    } else {
      setSelectedUsers(prevState => [...prevState, user.id])
    }
  }

  const handleSelectAll = () => {
    if (selectedUsers.length === studentsData.students.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(map(studentsData.students, student => student.id))
    }
  }

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderStudents = useCallback(() => {
    const filteredUsers =
      searchValue === ''
        ? studentsData.students
        : filter(studentsData.students, user =>
            includes(toLower(user.full_name), toLower(searchValue)),
          )

    return map(filteredUsers, (user, index: number) => {
      const id = get(user, 'id')
      const isChecked = includes(selectedUsers, id)
      const isLastUser = index === filteredUsers.length - 1

      return (
        <StudentContainer
          key={id}
          ref={isLastUser ? lastElementRef : null}
          onClick={() => handleSelect(user)}
        >
          <CheckBox checked={isChecked} />
          <Flex ml="14px" mr="14px">
            <Avatar src={user?.avatar} />
          </Flex>

          <Flex flexWrap="wrap">
            <Element width={1}>{user?.full_name}</Element>
            <Element
              color={theme.colors.graySecondary}
              fontSize="12px"
              width={1}
            >
              Class: {user?.class_details?.class_name}
            </Element>
          </Flex>
        </StudentContainer>
      )
    })
  }, [studentsData, selectedUsers, searchValue])

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content>
        <Title>Reassign students to the classroom “{className}”</Title>

        <Flex width={1}>
          <SelectAllContainer>
            <CheckBox
              checked={studentsData.students.length === selectedUsers.length}
              withLabel
              onClick={handleSelectAll}
            />
            <span>All</span>
          </SelectAllContainer>

          <SearchInput
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </Flex>

        <Flex flexWrap="wrap" mt={22} width={1}>
          {isStudentsLoading ? (
            <Loader height={60} width={60} />
          ) : (
            <StudentsList>
              {renderStudents()}
              {isLoadingMore && <Loader height={60} width={60} />}
            </StudentsList>
          )}
        </Flex>

        {responseError && <Error>{renderResponseErrors()}</Error>}

        <ButtonsContainer mt="20px">
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button
            disabled={selectedUsers.length === 0}
            primary
            onClick={handleSubmit}
          >
            Confirm
          </Button>
          {isLoading && <Loader />}
        </ButtonsContainer>
      </Content>
    </Modal>
  )
}

export default AssignStudentsToClassSelectorModal

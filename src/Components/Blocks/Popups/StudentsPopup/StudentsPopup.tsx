import React, { useEffect, useRef, useState } from 'react'

import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { resetIconGlyph } from 'Assets/svg/common'

import { Flex, Loader } from 'Components/UI'

import useInfiniteScroll from 'Hooks/useInfiniteScroll'
import useOutsideClick from 'Hooks/useOutsideClick'
import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'
import _ from 'Services/I18n'

import {
  Avatar,
  CheckBox,
  Container,
  FormButton,
  InformContainer,
  ResetButton,
  SearchIcon,
  SearchWrap,
  StudentContainer,
  StudentsContainer,
  StudentsList,
  Title,
} from './styles'

type User = {
  avatar: string
  full_name: string
  id: number
}

type Props = {
  type: 'single' | 'multiple'
  selectedUsers: Array<User>
  onSubmit: (users: Array<User>) => void
  onClose: () => void
}

const StudentsPopup: React.FC<Props> = ({
  type,
  selectedUsers,
  onClose,
  onSubmit,
}) => {
  const [activeUsers, setActiveUsers] = useState<Array<User>>(selectedUsers)
  const [searchValue, setSearchValue] = useState<string>('')

  const ref = useRef(null)

  useOutsideClick({ ref, onClick: onClose })

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
    },
  })

  const studentsData = reduce(
    teacherStudents,
    (
      acc: {
        students: User[]
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
  )

  const loadMoreStudents = async () => {
    const nextSize = size + 1

    if (nextSize <= studentsData.lastPage) {
      await setSize(nextSize)
    }
  }

  const [lastElementRef] = useInfiniteScroll(loadMoreStudents, isLoadingMore)

  useEffect(() => {
    setActiveUsers(selectedUsers)
  }, [selectedUsers])

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target
    setSearchValue(value)
  }

  const handleReset = (e: React.MouseEvent): void => {
    e.preventDefault()
    setSearchValue('')
  }

  const handleSelect = (user: User): void => {
    if (type === 'single') {
      setActiveUsers([user])
    } else if (
      includes(map(activeUsers, 'id'), user.id) &&
      type === 'multiple'
    ) {
      setActiveUsers(prevState => filter(prevState, it => it.id !== user.id))
    } else {
      setActiveUsers(prevState => [...prevState, user])
    }
  }

  const renderStudents = (): Array<React.ReactNode> | null =>
    map(studentsData.students, (user, index) => {
      const isLastUser = index === studentsData.students.length - 1
      const id = get(user, 'id')
      const avatar = get(user, 'avatar', 'https://google.com')
      const fullname = get(user, 'full_name', '')
      const parentEmail = get(user, 'parent_email')
      const isChecked = includes(map(activeUsers, 'id'), id)

      return (
        <StudentContainer
          key={id}
          ref={isLastUser ? lastElementRef : null}
          onClick={() => handleSelect(user)}
        >
          <CheckBox
            checked={isChecked}
            type={type === 'single' ? 'circle' : undefined}
          />
          <Flex ml="14px" mr="14px">
            <Avatar height={32} src={avatar} width={32} />
          </Flex>

          <Flex flexWrap="wrap">
            {fullname}

            {parentEmail && (
              <Flex width={1}>
                <b>Email: </b> {parentEmail}
              </Flex>
            )}
          </Flex>
        </StudentContainer>
      )
    })

  return (
    <Container ref={ref}>
      <Title>
        Add {type === 'single' ? 'student' : 'students'} to the call
      </Title>

      <Flex width={1}>
        <SearchWrap>
          <SearchIcon />
          <input
            placeholder={_('general.searchHere')}
            value={searchValue}
            onChange={handleSearchChange}
          />
          {searchValue.length > 0 && (
            <Flex onClick={handleReset}>
              <ResetButton icon={resetIconGlyph} size={14} />
            </Flex>
          )}
        </SearchWrap>
      </Flex>

      <StudentsContainer>
        <StudentsList>{renderStudents()}</StudentsList>
        {isStudentsLoading && <Loader height={60} width={60} />}
      </StudentsContainer>
      <InformContainer>
        {type === 'multiple' && `${activeUsers.length} students selected`}
      </InformContainer>
      <Flex justifyContent="space-between" mt={22} width={1}>
        <FormButton
          onClick={e => {
            e.preventDefault()
            onClose()
          }}
        >
          Cancel
        </FormButton>
        <FormButton
          active
          onClick={e => {
            e.preventDefault()
            onSubmit(activeUsers)
          }}
        >
          Save
        </FormButton>
      </Flex>
    </Container>
  )
}

export default StudentsPopup

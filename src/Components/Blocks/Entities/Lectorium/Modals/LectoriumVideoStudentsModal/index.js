import React, { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import debounce from 'lodash/debounce'
import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import toLower from 'lodash/toLower'

import { Flex, Loader } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import { lectoriumApi } from 'Services/Api/requests'
import _ from 'Services/I18n'

import {
  CloseButton,
  Content,
  Description,
  Header,
  List,
  LoaderContainer,
  Modal,
  SearchIcon,
  SearchWrap,
  Tab,
  Title,
  UserListWrapper,
} from './styles'
import User from './User'

const TABS = {
  students: {
    label: 'All Students',
  },
  active: {
    label: 'On Study',
  },
  completed: {
    label: 'Finished',
  },
  new: {
    label: 'Not Started',
  },
}

const LectoriumVideoStudentsModal = ({ isOpen, onClose, title, id }) => {
  const ref = useRef('')

  useOutsideClick({ ref, onClick: onClose })

  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [query, setQuery] = useState('')
  const [students, setStudents] = useState({
    students: [],
    onStudy: [],
    finished: [],
    notStarted: [],
  })
  const [activeTab, setActiveTab] = useState('students')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const response = await lectoriumApi.getStudentsByLectorium(id)

      setLoading(false)

      const users = get(response, 'data', [])

      const usersByProgress = {
        students: users,
        active: filter(users, st => st.lectorium_progress === 'active'),
        completed: filter(users, st => st.lectorium_progress === 'completed'),
        new: filter(users, st => st.lectorium_progress === 'new'),
      }

      setStudents({
        ...usersByProgress,
      })
    }

    fetchData()
  }, [id])

  const handleSetQuery = value => {
    setQuery(value)
  }

  const debouncedSetQuery = useRef(debounce(handleSetQuery, 500, {}))

  const handleSearch = e => {
    const { value } = e.target
    setSearchValue(value)

    debouncedSetQuery.current(value)
  }

  const renderTabs = () =>
    map(TABS, (tab, index) => (
      <Tab
        active={activeTab === index}
        index={tab}
        key={tab.label}
        onClick={() => setActiveTab(index)}
      >
        {tab.label} - {get(students, [index], []).length}
      </Tab>
    ))

  const renderUsers = useMemo(() => {
    let selectedUsers = get(students, [activeTab], [])

    if (searchValue.length > 0) {
      selectedUsers = filter(selectedUsers, student => {
        const fullname = get(student, 'full_name')

        return includes(toLower(fullname), toLower(searchValue))
      })
    }

    return map(selectedUsers, student => {
      const studentId = get(student, 'id')
      const isOnline = get(student, 'onlineStatus', false) === 'online'
      const avatar = get(student, 'avatar', false)
      const fullname = get(student, 'full_name')

      return (
        <User
          avatar={avatar}
          id={studentId}
          isOnline={isOnline}
          key={studentId}
          name={fullname}
        />
      )
    })
  }, [query, students, activeTab])

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <CloseButton onClick={onClose} />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Title>Video “{title}”</Title>

        {isLoading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <Description>
              Your Students - {get(students, 'students').length}
            </Description>

            <UserListWrapper mt={24}>
              <Header>
                <Flex>{renderTabs()}</Flex>

                <SearchWrap>
                  <SearchIcon />
                  <input
                    placeholder={_('general.searchHere')}
                    value={searchValue}
                    onChange={handleSearch}
                  />
                </SearchWrap>
              </Header>
              <List>{renderUsers}</List>
            </UserListWrapper>
          </>
        )}
      </Content>
    </Modal>
  )
}

LectoriumVideoStudentsModal.propTypes = {
  id: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LectoriumVideoStudentsModal

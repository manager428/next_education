import React, { useCallback, useEffect, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { groupAvatar } from 'Assets/images/chat'

import { Flex } from 'Components/UI'

import { USER_ROLES } from 'Constants/ids'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'

import _ from 'Services/I18n'

import { convertMessageDate, isNormalInteger } from 'Utils/chat'

import ChatListItem from './ChatListItem'
import { ChevronIcon, SectionTitle } from './styles'

// TODO: add correct types
type Props = {
  users: {
    classmates?: any[]
    students?: any[]
    friends?: any[]
    classes?: any[]
    class: any
  }
  isExpanded: boolean
  onSelect: (user: any) => void
  selectedUser: any
}

const ChatList: React.FC<Props> = ({
  selectedUser,
  isExpanded,
  users,
  onSelect,
}) => {
  const me = useMe()
  const { isStudent, isTeacher } = useRole()

  const [collapsedState, setCollapsedState] = useState({
    isStudentsCollapsed: true,
    isFriendsCollapsed: false,
  })

  useEffect(() => {
    if (isStudent)
      setCollapsedState(prevState => ({
        ...prevState,
        isStudentsCollapsed: false,
      }))
  }, [isStudent])

  const studentClass = users?.class ?? null
  const teacherClasses = users?.classes ?? []
  const friends = users?.friends ?? []
  const students = users?.students ?? []
  const classmates = users?.classmates ?? []

  function handleToggleCollapse(section) {
    if (section === 'students') {
      setCollapsedState(prevState => ({
        ...prevState,
        isStudentsCollapsed: !prevState.isStudentsCollapsed,
      }))
    }

    if (section === 'friends') {
      setCollapsedState(prevState => ({
        ...prevState,
        isFriendsCollapsed: !prevState.isFriendsCollapsed,
      }))
    }
  }

  const renderClasses = useCallback(
    () => (
      <Flex flexWrap="wrap">
        <SectionTitle mb="26px">{_('general.classmates')}</SectionTitle>

        {map(teacherClasses, teacherClass => {
          const lastMessage = get(teacherClass, 'last_message', {})
          const message = get(lastMessage, 'message', '')
          const messageDate = get(lastMessage, 'time', '')
          const time = isNormalInteger(messageDate)
            ? convertMessageDate(messageDate)
            : messageDate

          return (
            <Flex
              key={teacherClass.id}
              width={isExpanded ? 1 : 'auto'}
              onClick={() => onSelect(teacherClass)}
            >
              <ChatListItem
                active={
                  get(selectedUser, 'id') === teacherClass.id &&
                  get(selectedUser, 'type') === teacherClass.type
                }
                counter=""
                image={groupAvatar}
                isExpanded={isExpanded}
                message={message}
                time={time}
                title={teacherClass.name}
              />
            </Flex>
          )
        })}
      </Flex>
    ),
    [teacherClasses],
  )

  const renderStudentClass = () => {
    const lastMessage = get(studentClass, 'last_message', {})
    const message = get(lastMessage, 'message', '')
    const messageDate = get(lastMessage, 'time', '')
    const time = isNormalInteger(messageDate)
      ? convertMessageDate(messageDate)
      : messageDate

    return (
      <>
        <SectionTitle mb="26px" wide={isExpanded}>
          {studentClass.name}
        </SectionTitle>
        <Flex
          key={studentClass.id}
          width={isExpanded ? 1 : 'auto'}
          onClick={() => onSelect(studentClass)}
        >
          <ChatListItem
            active={
              get(selectedUser, 'id') === studentClass.id &&
              get(selectedUser, 'type') === studentClass.type
            }
            counter=""
            image={groupAvatar}
            isExpanded={isExpanded}
            message={message}
            time={time}
            title={studentClass.name}
          />
        </Flex>
      </>
    )
  }

  const renderUsers = data =>
    map(data, user => {
      const name = get(user, 'full_name', '')
      const userOnlineStatus = get(user, 'user_online_status', false)
      const avatar = get(user, 'avatar', '')
      const lastMessage = get(user, 'last_message', {})
      const unreadMessages = get(lastMessage, 'unread', 0)
      const message = get(lastMessage, 'message', '')
      const messageDate = get(lastMessage, 'time', '')
      const time = isNormalInteger(messageDate)
        ? convertMessageDate(messageDate)
        : messageDate

      return (
        <Flex key={user.id} width="100%" onClick={() => onSelect(user)}>
          <ChatListItem
            active={
              get(selectedUser, 'id') === user.id &&
              get(selectedUser, 'type') === user.type
            }
            counter={unreadMessages === 1 ? 'new' : unreadMessages}
            image={avatar}
            isExpanded={isExpanded}
            message={message}
            online={userOnlineStatus}
            time={time}
            title={name}
            withOnlineStatus
          />
        </Flex>
      )
    })

  const renderPenpals = penpals => {
    const userRole = me?.role

    return (
      <Flex flexWrap="wrap" width={1}>
        <SectionTitle
          mb="26px"
          mt={30}
          onClick={() => handleToggleCollapse('students')}
        >
          {userRole === USER_ROLES.student
            ? _('general.classmates')
            : _('general.students')}

          <ChevronIcon
            up={collapsedState.isStudentsCollapsed}
            wrapperStyles={{
              ml: '10px',
              mt: '3px',
            }}
          />
        </SectionTitle>

        <Flex flexWrap="wrap">
          {!collapsedState.isStudentsCollapsed && renderUsers(penpals)}
        </Flex>
      </Flex>
    )
  }

  const renderFriends = items => (
    <>
      <SectionTitle
        mb="26px"
        mt={30}
        onClick={() => handleToggleCollapse('friends')}
      >
        {_('general.friends')}
        <ChevronIcon
          up={collapsedState.isFriendsCollapsed}
          wrapperStyles={{ ml: '10px', mt: '3px' }}
        />
      </SectionTitle>

      <Flex flexWrap="wrap">
        {!collapsedState.isFriendsCollapsed && renderUsers(items)}
      </Flex>
    </>
  )

  return (
    <Flex flexWrap="wrap" mt="20px" pl="20px" pr="28px" width={1}>
      {!!teacherClasses.length && isTeacher && renderClasses()}
      {!!students.length && isTeacher && renderPenpals(students)}
      {studentClass && isStudent && renderStudentClass()}
      {!!classmates.length && renderPenpals(classmates)}
      {!!friends.length && renderFriends(friends)}
    </Flex>
  )
}

export default ChatList

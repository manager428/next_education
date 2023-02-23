import React, { useRef, useState } from 'react'

import SimpleBarReact from 'simplebar-react'

import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import mapValues from 'lodash/mapValues'

import { searchIconGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'

import { CHAT_USERS_TYPE } from 'Constants/chat'

import _ from 'Services/I18n'

import { getMaxBlockHeight } from 'Utils/chat'

import ChatList from './ChatList/ChatList'
import {
  HideButton,
  SearchInput,
  SearchWrapper,
  SidebarHeader,
  SidebarWrap,
} from './styles'

import 'simplebar/dist/simplebar.min.css'

// TODO : add types
const Sidebar: React.FC<any> = ({ users, onSelect, selectedUser }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isExpanded, toggleExpanded] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<any>({})

  const handleClickSearch = () => {
    if (isExpanded) return

    toggleExpanded(!isExpanded)

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleChangeSearch = e => {
    const { value } = e.target
    setSearchValue(value)

    const sectionsBySearch = mapValues(users, (section: any) => {
      if (Array.isArray(section)) {
        return filter(section, user => {
          if (user.type === CHAT_USERS_TYPE.CLASS)
            // search by class name
            return includes(
              get(user, 'name', '').toLowerCase(),
              value.toLowerCase(),
            )

          return includes(
            get(user, 'full_name', '').toLowerCase(),
            value.toLowerCase(),
          )
        })
      }

      return {
        ...section,
        students: filter(section?.students, user =>
          includes(
            get(user, 'full_name', '').toLowerCase(),
            value.toLowerCase(),
          ),
        ),
      }
    })

    setFilteredUsers(sectionsBySearch)
  }

  const searchedUsers = searchValue.length > 0 ? filteredUsers : users

  return (
    <SidebarWrap width={isExpanded ? 428 : 165}>
      <SimpleBarReact style={{ maxHeight: `${getMaxBlockHeight() - 20}px` }}>
        <SidebarHeader>
          <SearchWrapper
            width={isExpanded ? '326px' : '49px'}
            onClick={handleClickSearch}
          >
            <Icon
              fill="#828282"
              icon={searchIconGlyph}
              size={25}
              wrapperStyles={{ mr: '5px' }}
            />
            <SearchInput
              placeholder={isExpanded ? _('general.searchHere') : ''}
              ref={inputRef}
              wide={isExpanded}
              onChange={handleChangeSearch}
            />
          </SearchWrapper>
          <Flex onClick={() => toggleExpanded(!isExpanded)}>
            <HideButton rotated={!isExpanded} wrapperStyles={{ ml: '14px' }} />
          </Flex>
        </SidebarHeader>

        <ChatList
          isExpanded={isExpanded}
          selectedUser={selectedUser}
          users={searchedUsers}
          onSelect={onSelect}
        />
      </SimpleBarReact>
    </SidebarWrap>
  )
}

export default Sidebar

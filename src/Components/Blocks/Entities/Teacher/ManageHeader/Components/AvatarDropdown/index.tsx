import React, { useCallback, useRef, useState } from 'react'

import Link from 'next/link'

import map from 'lodash/map'

import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'

import {
  ArrowIcon,
  ArrowWrap,
  Avatar,
  Container,
  Dropdown,
  FullName,
  List,
  Option,
} from './styles'

const LINKS = [
  {
    label: 'Profile Settings',
    path: PRIVATE_PATHS.SETTINGS,
  },
]

const AvatarDropDown = () => {
  const me = useMe()
  const ref = useRef()

  const [isShowDropdown, setShowDropdown] = useState(false)

  useOutsideClick({ ref, onClick: () => setShowDropdown(false) })

  const handleShowDropdown = useCallback(() => {
    setShowDropdown(prevState => !prevState)
  }, [])

  const renderLinks = useCallback(
    () =>
      map(LINKS, link => (
        <Option key={link.path}>
          <Link href={link.path} passHref>
            <a>{link.label}</a>
          </Link>
        </Option>
      )),
    [],
  )

  if (!me) {
    return null
  }

  return (
    <Container ref={ref} onClick={handleShowDropdown}>
      <Avatar alt="avatar" priority src={me?.avatar} />
      <Dropdown minWidth={160} ml={14}>
        <FullName>{me?.full_name}</FullName>
        <ArrowWrap ml="11px">
          <ArrowIcon />
        </ArrowWrap>
        {isShowDropdown && <List>{renderLinks()}</List>}
      </Dropdown>
    </Container>
  )
}

export default AvatarDropDown

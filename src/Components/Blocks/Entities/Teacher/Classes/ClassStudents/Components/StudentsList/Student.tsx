import React, { useRef, useState } from 'react'

import Link from 'next/link'

import { threeDotsGlyph } from 'Assets/svg/common'

import { useListContext } from 'Containers/Pages/Teacher/Classes/context'

import { Checkbox, Element, Flex, Icon } from 'Components/UI'

import { PRIVATE_PATHS } from 'Constants/paths'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import {
  openAssignToClassModal,
  openChangeStudentPasswordModal,
  openRemoveStudentModal,
  openUpdateYearOfBirthModal,
} from 'Store/modals/slice'

import { theme } from 'Theme'

import { Avatar, List, ListButton, Option } from './styles'

const Student: React.FC<{
  avatar: string
  age: number
  id: number
  fullName: string
  country: string
  classDetails: {
    id: number
    className: string
  }
  isSelected: boolean
  isSelectable: boolean
  yearOfBirth?: string
}> = ({
  age,
  avatar,
  id,
  fullName,
  country,
  classDetails,
  isSelected,
  isSelectable,
  yearOfBirth,
}) => {
  const dispatch = useAppDispatch()
  const { onSelectStudent } = useListContext()
  const ref = useRef()
  const [isShowDropdown, setShowDropdown] = useState(false)

  useOutsideClick({ ref, onClick: () => setShowDropdown(false) })

  const handleToggleDropdown = () => {
    setShowDropdown(prevState => !prevState)
  }

  const handleResetClick = () => {
    dispatch(openChangeStudentPasswordModal({ id }))
  }

  const handleDeleteClick = () => {
    dispatch(openRemoveStudentModal({ id, avatar, fullName }))
  }

  const handleAssignToClass = () => {
    dispatch(
      openAssignToClassModal({
        id,
        fullName,
        classDetails,
      }),
    )
  }

  const handleUpdateYearOfBirth = () => {
    dispatch(
      openUpdateYearOfBirthModal({
        id,
        fullName,
        yearOfBirth,
      }),
    )
  }

  const handleSelectUser = () => {
    onSelectStudent(id)
  }

  return (
    <Flex alignItems="center" mb={28} width={1}>
      {isSelectable && (
        <Flex mr="10px">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Checkbox
            checked={isSelected}
            id={`checkbox-${id}`}
            onChange={handleSelectUser}
          />
        </Flex>
      )}

      <Flex flexShrink={0}>
        <Link href={PRIVATE_PATHS.USER_PROFILE(id)}>
          <a>
            <Avatar src={avatar} />
          </a>
        </Link>
      </Flex>

      <Flex flexGrow={1} flexWrap="wrap" ml={16} mr={16}>
        <Link href={PRIVATE_PATHS.USER_PROFILE(id)}>
          <Element
            as="a"
            fontSize={16}
            fontWeight={600}
            lineHeight="16px"
            width={1}
          >
            {fullName}
          </Element>
        </Link>

        <Element
          color={theme.colors.graySecondary}
          fontSize={16}
          lineHeight="16px"
          mt="12px"
          width={1}
        >
          {country ?? '-'}
        </Element>

        <Element
          color={theme.colors.graySecondary}
          fontSize={16}
          lineHeight="16px"
          mt="12px"
          width={1}
        >
          {age ? `${age} y.o` : null}
        </Element>
      </Flex>
      <Flex position="relative" ref={ref}>
        <Element as="button" onClick={handleToggleDropdown}>
          <Icon
            fill={theme.colors.graySecondary}
            icon={threeDotsGlyph}
            size={28}
          />
        </Element>

        {isShowDropdown && (
          <List>
            <Option>
              <ListButton onClick={handleAssignToClass}>
                Reassign Classroom
              </ListButton>
            </Option>
            <Option onClick={handleUpdateYearOfBirth}>
              <ListButton>Change year of birth</ListButton>
            </Option>
            <Option>
              <ListButton onClick={handleResetClick}>Reset Password</ListButton>
            </Option>
            <Option>
              <ListButton onClick={handleDeleteClick}>
                Delete Student
              </ListButton>
            </Option>
          </List>
        )}
      </Flex>
    </Flex>
  )
}

export default Student

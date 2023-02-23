import React, { useCallback, useRef, useState } from 'react'

import { threeDotsGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import {
  openAssignToClassModal,
  openChangeStudentPasswordModal,
  openRemoveStudentModal,
  openUpdateYearOfBirthModal,
} from 'Store/modals/slice'

import { theme } from 'Theme'

import { List, ListButton, Option } from '../styles'

const ActionsCell: React.FC<{
  row: {
    original: {
      id: number
      full_name: string
      avatar: string
      year_of_birth?: string
      class_details: {
        class_name: string
      }
    }
  }
}> = ({ row: { original } }) => {
  const ref = useRef()
  const dispatch = useAppDispatch()

  const [isShowDropdown, setShowDropdown] = useState(false)

  useOutsideClick({ ref, onClick: () => setShowDropdown(false) })

  const handleShowDropdown = useCallback(() => {
    setShowDropdown(prevState => !prevState)
  }, [])

  const handleResetClick = () => {
    dispatch(openChangeStudentPasswordModal({ id: original.id }))
  }

  const handleDeleteClick = () => {
    dispatch(
      openRemoveStudentModal({
        id: original.id,
        avatar: original.avatar,
        fullName: original.full_name,
      }),
    )
  }

  const handleAssignToClass = () => {
    dispatch(
      openAssignToClassModal({
        id: original.id,
        fullName: original.full_name,
        classDetails: {
          className: original.class_details.class_name,
        },
      }),
    )
  }

  const handleUpdateYearOfBirth = () => {
    dispatch(
      openUpdateYearOfBirthModal({
        yearOfBirth: original.year_of_birth,
        id: original.id,
        fullName: original.full_name,
      }),
    )
  }

  return (
    <Flex
      alignItems="center"
      alignSelf="flex-stretch"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      ref={ref}
      width={1}
    >
      <Element as="button" mt="7px" onClick={handleShowDropdown}>
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
            <ListButton onClick={handleDeleteClick}>Delete Student</ListButton>
          </Option>
        </List>
      )}
    </Flex>
  )
}

export default ActionsCell

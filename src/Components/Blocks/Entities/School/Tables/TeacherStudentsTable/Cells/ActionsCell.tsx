import React, { useCallback, useRef, useState } from 'react'

import { threeDotsGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import {
  List,
  ListButton,
  Option,
} from 'Components/Blocks/Entities/School/Tables/TeacherStudentsTable/styles'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import {
  openSchoolChangeStudentPasswordModal,
  openSchoolDeleteStudentModal,
  openSchoolReassignStudentTeacherModal,
} from 'Store/modals/slice'

import { theme } from 'Theme'

const ActionsCell: React.FC<{
  row: {
    original: {
      id: number
      avatar: string
      full_name: string
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

  const handleReassignClick = () => {
    setShowDropdown(false)
    dispatch(
      openSchoolReassignStudentTeacherModal({
        userIds: [original.id],
        avatar: original.avatar,
        fullName: original.full_name,
      }),
    )
  }

  const handleResetClick = () => {
    setShowDropdown(false)
    dispatch(
      openSchoolChangeStudentPasswordModal({
        userId: original.id,
      }),
    )
  }

  const handleDeleteClick = () => {
    setShowDropdown(false)

    dispatch(
      openSchoolDeleteStudentModal({
        userId: original.id,
        fullName: original.full_name,
        avatar: original.avatar,
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
            <ListButton onClick={handleReassignClick}>
              Reassign Teacher
            </ListButton>
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
